import React, { Component } from 'react';
import { ButtonCreateQuestion } from './ButtonCreateQuestion';
import { ButtonStartQuiz } from './ButtonStartQuiz';

export class Home extends Component {
    displayName = Home.name

    render() {
        return (
            <div>
                <ButtonCreateQuestion />
                <ButtonStartQuiz />
            </div>
        )
    }
}

export default Home;
