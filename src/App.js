import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.alt === true ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt === true ? 'salmon' : 'lightgreen'};
    color: black
  }
`;

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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

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
        </div>
        );
          // style.backgroundColor = 'red';
          // style[':hover'] = {
          //   backgroundColor: 'salmon',
          //   color: 'black'
          // }
      }

      let classes = [];
      if(this.state.persons.length <= 2){
        classes.push('red');
      }
      if(this.state.persons.length <= 1){
        classes.push('bold');
      }
      

    return (
     
      <div className="App" >
        <h1>I am bobo</h1>
        <p className={classes.join(' ')}>Working!!!</p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>Switch!</StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;