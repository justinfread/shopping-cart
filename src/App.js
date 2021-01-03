import React, { Component } from 'react';
import NavBar from './components/navBar';
import Counters from './components/counters';
import './App.css';

class App extends Component {

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ],
    total: 0
  };

  handleShowTotal = () => {
    const counters = [...this.state.counters];
    let total = this.state.total;
    total = 0;

    let i = 0;
    for(i in counters) {
      total += counters[i].value;
    }

    this.setState({ total });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; // Clone the counters array
    const index = counters.indexOf(counter); // Get the index of the counters object
    counters[index].value++; // Increment the value of counters at index
    this.setState({ counters }); // Set state to new array
    this.handleShowTotal(); // update the nav bar to show the total number of items selected
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
    this.handleShowTotal(); // update the nav bar to show the total number of items selected
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() { 
    return ( 
      <React.Fragment>
        <NavBar 
          total={this.state.total}
          onShowTotal={this.handleShowTotal} />
        <main className="container">
          <Counters
            counters={this.state.counters} 
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement} 
            onDelete={this.handleDelete} />
        </main>
      </React.Fragment>
     );
  }
}
 
export default App;
