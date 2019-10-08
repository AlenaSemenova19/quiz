import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class QuestionCreator extends Component {
    displayName = QuestionCreator.name;
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answers: []
        };
    }

    createQuestion(e) {
        e.preventDefault();
        
        console.log(this.state);
        var Request =
        {
            Question: this.state.question,
            Answers: this.state.answers.map(answer => {
                return {
                    text: answer.text,
                    rightAnswer: answer.isTrue
                }
            }) 
        };

        fetch('https://localhost:44392/api/QuizData/AddQuestion', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Request),
        });

    }

    answerChange = (type, value, index) => {
        const answers = this.state.answers;
        answers[index][type] = value;
        this.setState({answers});
    }

    SaveQuestion = (event) => {
        this.setState({
            question: event.target.value
        })
    }

    render() {

        return (
            <div className="form-wrap">
                <div className="question">
                    <Link to="/">Back</Link>
                    <h1>Create Question</h1>
                </div>
                <button onClick={() => {
                    const answers = this.state.answers;
                    answers.push({
                        text: '',
                        isTrue: false
                    });
                    this.setState({ answers });
                }}> add answer </button>
                <form onSubmit={(e) => this.createQuestion(e)}>
                    <div>
                        <label htmlFor="name">Your Question: </label>
                        <input type="text" size="40" id="questionId" value={this.state.question} onChange={this.SaveQuestion} />
                    </div>
                    &nbsp;
                    <div>
                        <ul>
                            {this.state.answers.map((answer, index) => <li key={index}>
                                <div className="answer">
                                    <input className="valueAnswer"
                                        type="text" value={answer.text} onChange={(e) => this.answerChange('text', e.target.value, index)} />
                                    <input className="checkAnswer"
                                        type="checkbox" value={answer.isTrue}
                                        onChange={(e) => this.answerChange('isTrue', e.target.checked, index)} />
                                </div>
                            </li>)}
                        </ul>

                        <button>Create</button>
                    </div>
                </form>
            </div>
        );
    }
}