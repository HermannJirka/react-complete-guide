import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:
      [{ id: '1', name: 'Maxx', age: 29, company: 'Pepsi' },
      { id: '2', name: 'Born', age: 36, company: 'Oracle' },
      { id: '3', name: 'Ron', age: 34, company: 'Google' }],
    otherState: 'otherState',
    showPersons: false
  };

  switchName = (newName, newAge) => {
    console.log('Was clicked!');
    this.setState(
      {
        persons:
          [{ name: newName, age: newAge, company: 'CocaCola' },
          { name: 'George', age: 36, company: 'Oracle' },
          { name: 'Karl', age: 34, company: 'Microsoft' }]
      }
    )
  }

  nameChangeHandler = (event, id) => {
    console.log('PersonId: '+id);
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    console.log(personIndex);

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState(
      {
        persons: persons
      }
    );
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  deletePerson = (index) => {
    //  const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>

          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePerson(index)}
              name={person.name}
              age={person.age}
              company={person.company}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event,person.id)}
            />
          })}
        </div>);
    }

    return (


      <div className="App" >
        <h1>I am bobo</h1>
        <p>Working!!!</p>
        <button style={style} onClick={this.togglePersonHandler}>Switch!</button>
        {persons}
      </div>
    );
  }
}

export default App;