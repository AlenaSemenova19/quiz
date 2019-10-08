import React from 'react';

export class StartQuiz extends React.Component {
    displayName = StartQuiz.name;

    constructor(props) {
        super(props)
        this.state = {
            question: "",
            isFetching: true,
            data:[],
            numberOfQuestion: 3,
            points: 0

        };

    }

    componentDidMount()
    {
        fetch('https://localhost:44392/api/QuizData/GetQuestions?numberOfQuestion=' + this.state.numberOfQuestion)
            .then(response => response.json())
            .then(result => {
                if (result == null)
                {
                    alert('END your points: ' + this.state.points);

                }
                var VariableQuestion = result.text;

                this.setState({
                    question: VariableQuestion,
                    isFetching: false,
                    data: result.allAnswers,
                    numberOfQuestion: this.state.numberOfQuestion + 1
                });
            });

    }

    NextQuestion = () => {
        var allAnswers = document.getElementsByClassName("classSelectAnswer");
        var data = this.state.data;
        var wrongAnswer = false;
        for (var i = 0; i < allAnswers.length; i++) {
            var text = allAnswers[i].getElementsByClassName("id_label")[0].firstChild.data;
            var result = allAnswers[i].getElementsByClassName("result")[0].checked;

            for (var y = 0; y < data.length; y++)
            {
                var textOfAnswer = data[y];

                if (textOfAnswer.text == text && textOfAnswer.rightAnswer != result) {
                    alert('it is wrong answer!');
                    wrongAnswer = true;
                    break;
                }
            }
            if (wrongAnswer) {
                break;
            }

        }
        if (!wrongAnswer) {
            alert('Right answer!');
            this.setState({
                points: this.state.points + 1
            });
        }
       
        this.setState({
            numberOfQuestion: this.state.numberOfQuestion + 1
        });
        this.componentDidMount();
    }

    //toggleCheckbox()
    //{
    //    var text = '';
    //    var a = document.getElementsByClassName("id_label");
    //    for (var i = 0; i > a.length; i++)
    //    {
    //        text = a[i].innerHTML;
    //    }
    //    console.log(text);
    //}

    render() {
        const { question, isFetching} = this.state;

        if (isFetching) return <div>...Loading</div>;

        return (
            <div>
                <h1>{question}</h1>
                {
                    this.state.data.map((data) => {
                        return (
                            <div>
                                <ul>
                                    <p>
                                        <li>
                                            <div className="classSelectAnswer">
                                                <input type="checkbox" className="result" />
                                                <label className="id_label">{data.text}</label>
                                            </div>
                                        </li>
                                    </p>
                                </ul>
                            </div>
                        )
                    })
                }
                <button onClick={this.NextQuestion}>Next</button> 
            </div>
        )
    }
}