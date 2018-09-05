import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  getClassification = (integer) => {
    // error catchers
    if(isNaN(integer)) return 'Sorry, you need to input a number to get a correct evaluation.';
    if(integer <= 1) return 'Sorry, you must input a positive number greater than one to get a correct evaluation.';

    const aliquot = [];
    // check each of the divisors. Can stop at int/2 for performance
    for(let i = 1; i <= integer/2; i ++){
      // if proper divisor push into array
      if(integer % i === 0) aliquot.push(i);
    }

    // sum numbers in array to find aliquotSum
    const aliquotSum = aliquot.reduce((a, b) => a + b);

    // return correct answer
    if (aliquotSum > integer) return 'Abundant';
    else if (aliquotSum < integer) return 'Deficient';
    else return 'Perfect';
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const answer = this.getClassification(this.state.input);
    this.setState({answer});
  }

  render() {
    // console.log(this.state);
    return (
      <main>
        <h1>Perfect Number</h1>
        <form onSubmit={this.handleSubmit}>
          <label>What number would you like to check?</label>
          <input type="text" name="input" onChange={this.handleChange} />
          <button type="submit" name="button">Check</button>
          {this.state.answer && <h3>Answer: {this.state.answer}</h3>}
        </form>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
