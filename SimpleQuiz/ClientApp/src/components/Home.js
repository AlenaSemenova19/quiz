import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

export class Home extends Component {
    displayName = Home.name

    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/QuestionCreator' />
        }
    }

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <button onClick={this.setRedirect}>Create Question</button>
                <NavLink to="/StartQuiz">Start Quiz!</NavLink>
            </div>
        )
    }
}
