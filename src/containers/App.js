import React, { Component } from 'react';
import './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';


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
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }
  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
              <Persons 
              persons={this.state.persons}
              clicked={this.deletePerson}
              changed={this.nameChangeHandler}
              />
        );
      }

      

    return (
     
      <div className="App" >
       <Cockpit
       title={this.props.appTitle}
       showPersons={this.state.showPersons}
       persons={this.state.persons}
       clicked={this.togglePersonHandler}
       />
        {persons}
      </div>
    );
  }
}

export default App;