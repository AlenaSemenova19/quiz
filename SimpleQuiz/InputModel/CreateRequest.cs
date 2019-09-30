using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleQuiz.InputModel
{
    public class CreateRequest
    {
        public string Question { get; set; }
        public IEnumerable <InputAnswer> Answers { get; set; }
    }
}
