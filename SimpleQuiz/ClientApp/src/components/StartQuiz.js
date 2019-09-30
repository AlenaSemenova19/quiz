import React from 'react';
import ReactDOM from 'react-dom';

export class StartQuiz extends React.Component {
    displayName = StartQuiz.name

    render() {
        const mystyle = {
            color: 'black',
            padding: '11rem',
            fontFamily: 'cursive',
            fontSize: '2rem',
            textAlign: 'center',
        };

        const buttonStyle = {
            float: 'right',
        };

        return (
            <div>
                <div class="question" style={mystyle}>
                    <span class="quesion_n">Площадь Белорусии составляет 4% от площади России, а площадь России от площади Белорусии...</span>
                </div>

                <table border="1" width="100%" cellpadding="5">
                    <tr>
                        <th>
                            <input type="radio" />
                            <label for="contactChoice1">Email</label>
                        </th>
                        <th>
                            <input type="radio" />
                            <label for="contactChoice1">Adress</label>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" />
                            <label for="contactChoice1">Go</label>
                        </td>
                        <td>
                            <input type="radio" />
                            <label for="contactChoice1">Email</label>
                        </td>
                    </tr>
                </table>

                <button style={buttonStyle}>Next</button>
            </div>
        );
    }
}

export default StartQuiz;