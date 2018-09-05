import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  render() {
    return (
      <main>
        <h1>Perfect Number</h1>
        <form id="form">
          <label>What number would you like to check?</label>
          <input type="text" name="" value="" id="input" />
          <button type="submit" name="button">Check</button>
        </form>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
