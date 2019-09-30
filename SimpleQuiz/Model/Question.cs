using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleQuiz.Model
{
    public class Question
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public List<Answer> AnswersId { get; set; } 
    }
}
