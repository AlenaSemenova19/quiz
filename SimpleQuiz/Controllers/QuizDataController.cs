using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SimpleQuiz.InputModel;
using SimpleQuiz.Model;
using SimpleQuiz.OutputModel;
using SimpleQuiz.Mapping;
namespace SimpleQuiz.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuizDataController : ControllerBase
    {
        private readonly Database db;
        
        public QuizDataController(Database context)
        {
            db = context;
        }

        private void Validation(CreateRequest Request)
        {
            if (String.IsNullOrEmpty(Request.Question))
            {
                throw new Exception("Question cannot be null or empty");
            }

            if (Request.Answers.Count() < 1)
            {
                throw new Exception("Answers cannot be empty");
            }
        }

        [HttpPost("[action]")]
        public void AddQuestion([FromBody]CreateRequest Request)
        {
            Validation(Request);
            var que = new Question()
            {
                Text = Request.Question
            };

            var Answers = new List<Answer>();
            var ans = Request.Answers.Select(x => Mapper.ToModel(x));
            Answers.AddRange(ans);
            que.AnswersId = new List<Answer>();
            que.AnswersId.AddRange(Answers);
            db.Questions.Add(que);
            db.SaveChanges();
        }
        [HttpPost("[action]")]
        public void test(InputAnswer test)
        {
            var a = test;
        }

        public List<OutputQuestion> GetQuestions()
        {
            var dbase = db.Questions.Include("Answer");

            var result = new List<OutputQuestion>();
            foreach (var q in dbase)
            {
                var que = new OutputQuestion();
                que.Text = q.Text;

                var ans =  q.AnswersId.Select(x => Mapper.ToModel(x));
                que.AllAnswers.AddRange(ans);
                result.Add(que);
            }

            return result;
        }
    }
}