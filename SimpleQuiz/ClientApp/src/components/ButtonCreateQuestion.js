import React, { Component } from 'react';

export class ButtonCreateQuestion extends Component {
    handlePageChange() {
        window.location.href = "/QuestionCreator";
    }

    displayName = ButtonCreateQuestion.name;
    render() {
        return (
            <div>
                <button onClick={this.handlePageChange}>Create Question</button>
            </div>
        )
    }
}

export default ButtonCreateQuestion;