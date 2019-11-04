import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 23, company: 'CocaCola' },
      { name: 'George', age: 36, company: 'Oracle' },
      { name: 'Karl', age: 42, company: 'Linux' }
    ],
    otherState: 'Some kind of state'
  }

  switchName = () => {
    console.log('Was clicked!');
    this.setState(
      {
        persons:
          [{ name: 'Maxamiliano', age: 29, company: 'CocaCola' },
          { name: 'George', age: 36, company: 'Oracle' },
          { name: 'Karl', age: 34, company: 'Microsoft' }]
      }
    )
  }

  render() {
    return (
      <div className="App" >
        <h1>I am bobo</h1>
        <p>Working!!!</p>
        <button onClick={this.switchName}>Switch!</button>
        {/* <Person name="Max" age="23" />
        <Person name="Pepa" age="32" />
        <Person name="Jarda" age="56" />
        <Person name="Jirka" age="34" />
        <Person name="Max" age="12">My favourite hobbie: Racing</Person> */}
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} company={this.state.persons[0].company} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} company={this.state.persons[1].company} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} company={this.state.persons[2].company} /></div>
    );
  }
}

export default App;
