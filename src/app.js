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
        <form>

        </form>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
