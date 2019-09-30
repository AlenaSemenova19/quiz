using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleQuiz.Model
{
    public class Answer
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public Question QuestionId { get; set; }
        public bool RightAnswer { get; set;}
    }
}
