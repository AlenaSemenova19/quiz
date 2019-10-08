import React, { Component } from 'react';

export class ButtonStartQuiz extends Component {

    handlePageChange() {
        window.location.href = "/StartQuiz";
    }

    displayName = ButtonStartQuiz.name;
    render() {
        return (
            <div>
                <button onClick={this.handlePageChange}>Start Quiz!</button>
            </div>
        )
    }
} 