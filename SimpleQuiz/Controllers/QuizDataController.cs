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

        private void Validation(string OneQuestion, List<InputAnswer> AllAnswers)
        {
            if (String.IsNullOrEmpty(OneQuestion))
            {
                throw new Exception("OneQuestion cannot be null or empty");
            }

            if (AllAnswers.Count < 1)
            {
                throw new Exception("AllAnswers cannot be empty");
            }
        }

        [HttpPost("[action]")]
        public void AddQuestion(string OneQuestion, List<InputAnswer> AllAnswers)
        {
            Validation(OneQuestion, AllAnswers);
            var que = new Question()
            {
                Text = OneQuestion
            };

            var Answers = new List<Answer>();
            var ans = AllAnswers.Select(x => Mapper.ToModel(x));
            Answers.AddRange(ans);
            que.AnswersId.AddRange(Answers);
            db.Questions.Add(que);
            db.SaveChanges();
        }
        [HttpPost("[action]")]
        public void test(string test)
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