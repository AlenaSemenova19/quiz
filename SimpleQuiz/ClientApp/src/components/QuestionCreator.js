import React, { Component } from 'react';

export class QuestionCreator extends Component {
    displayName = QuestionCreator.name
    createQuestion() {
        var OneQiestion = document.getElementById("questionId").value;
        var answerId = document.getElementsByClassName("answer");
        var AllAnswers = [];
        for (var i = 0; i < answerId.length; i++) {
            var answer = answerId[i].getElementsByClassName("valueAnswer")[0].value;
            var check = answerId[i].getElementsByClassName("checkAnswer")[0].checked;
            var obj = { Text: answer, RightAnswer: check };
            AllAnswers.push(obj);
        }

        var request = new XMLHttpRequest();
        request.open('POST', '/api/QuizData/AddQuestion', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.send(AllAnswers);

    }

    render() {

        return (
            <div class="form-wrap">
                <div class="question">
                    <h1>Create Question</h1>
                </div>
                <form>
                    <div>
                        <label for="name">Your Question: </label>
                        <input type="text" size="40" id="questionId" required />
                    </div>
                    &nbsp;
                    <div>
                        <ul>
                            <p><li><div class="answer"><input class="valueAnswer" type="text" /><input class="checkAnswer" type="checkbox" /></div></li></p>
                            <p><li><div class="answer"><input class="valueAnswer" type="text" /><input class="checkAnswer" type="checkbox" /></div></li></p>
                            <p><li><div class="answer"><input class="valueAnswer" type="text" /><input class="checkAnswer" type="checkbox" /></div></li></p>
                            <p><li><div class="answer"><input class="valueAnswer" type="text" /><input class="checkAnswer" type="checkbox" /></div></li></p>
                        </ul>

                        <button onClick={this.createQuestion} type="submit">Create</button> 
                    </div>
                </form> 
            </div>
        );
    }
}