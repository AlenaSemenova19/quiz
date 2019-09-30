import React, { Component } from 'react';

export class FetchData extends Component {
  displayName = FetchData.name

  static renderForecastsTable() {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          Hi
        </tbody>
      </table>
    );
  }

  render() {

    return (
      <div>
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
      </div>
    );
  }
}
