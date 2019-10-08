import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { QuestionCreator } from './components/QuestionCreator';
import { StartQuiz } from './components/StartQuiz';
import { ButtonCreateQuestion } from './components/ButtonCreateQuestion';
import { ButtonStartQuiz } from './components/ButtonStartQuiz';


export default class App extends Component {
  displayName = App.name

    render() {
        return (

            <Layout>
                <Route path='/QuestionCreator' component={QuestionCreator} />
                <Route path='/StartQuiz' component={StartQuiz} />
                <Route path='/ButtonCreateQuestion' component={ButtonCreateQuestion} />
                <Route path='/ButtonStartQuiz' component={ButtonStartQuiz} />
            </Layout>
        );
    }
}
