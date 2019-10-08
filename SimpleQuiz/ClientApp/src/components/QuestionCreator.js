import React, { Component } from 'react';
import {  Link } from 'react-router-dom';

export class QuestionCreator extends Component {
    displayName = QuestionCreator.name;
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answers: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    createQuestion(e) {
        e.preventDefault();
        console.log(e);
        const OneQiestion = document.getElementById("questionId").value;
        const answerId = document.getElementsByClassName("answer");
        const AllAnswers = [];
        for (var i = 0; i < answerId.length; i++) {
            var answer = answerId[i].getElementsByClassName("valueAnswer")[0].value;
            var check = answerId[i].getElementsByClassName("checkAnswer")[0].checked;
            var obj = { Text: answer, RightAnswer: check };
            AllAnswers.push(obj);
        }

        var Request =
        {
            Question: OneQiestion,
            Answers: AllAnswers
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

    render() {

        return (
            <div className="form-wrap">
                <div className="question">
                    <Link to="/">Back</Link> 
                    <h1>Create Question</h1>
                </div>

                <form onSubmit={this.createQuestion}>
                    <div>
                        <label htmlFor="name">Your Question: </label>
                        <input type="text" size="40" id="questionId" value={thtis.state.question}/>
                    </div>
                    &nbsp;
                    <div>
                        <ul>
                            <p>
                                <li>
                                    <div className="answer">
                                        <input className="valueAnswer" type="text" value={this.state.value} />
                                        <input className="checkAnswer" type="checkbox" />
                                    </div>
                                </li>
                            </p>
                            <p>
                                <li>
                                    <div className="answer">
                                        <input className="valueAnswer" type="text" />
                                        <input className="checkAnswer" type="checkbox" />
                                    </div>
                                </li>
                            </p>
                            <p><li><div className="answer"><input className="valueAnswer" type="text" /><input className="checkAnswer" type="checkbox" /></div></li></p>
                            <p><li><div className="answer"><input className="valueAnswer" type="text" /><input className="checkAnswer" type="checkbox" /></div></li></p>
                        </ul>

                        <button>Create</button> 
                    </div>
                </form> 
            </div>
        );
    }
}