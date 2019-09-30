using SimpleQuiz.InputModel;
using SimpleQuiz.Model;
using SimpleQuiz.OutputModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleQuiz.Mapping
{
    public static class Mapper
    {
        public static Answer ToModel(InputAnswer inputAnswer)
        {
            return new Answer()
            {
                RightAnswer = inputAnswer.RightAnswer,
                Text = inputAnswer.Text
            };
        }

        public static OutputAnswer ToModel(Answer outputAnswer)
        {
            return new OutputAnswer()
            {
                Text = outputAnswer.Text,
                RightAnswer = outputAnswer.RightAnswer
            };
        }
    }
}
