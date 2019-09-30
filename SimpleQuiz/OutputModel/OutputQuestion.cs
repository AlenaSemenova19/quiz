using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleQuiz.OutputModel
{
    public class OutputQuestion
    {
        public string Text { get; set; }
        public List<OutputAnswer> AllAnswers { get; set; }
    }

    public class OutputAnswer
    {
        public string Text { get; set; }
        public bool RightAnswer { get; set; }
    }
}
