import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonsState ] = useState( {persons:
    [{ name: 'Maxamiliano', age: 29, company: 'CocaCola' },
    { name: 'George', age: 36, company: 'Oracle' },
    { name: 'Karl', age: 34, company: 'Microsoft' }],
    otherState: 'otherState'
});

const [otherState, setOtherState]  = useState({otherState: 'other state dast'})

console.log(personsState,otherState);

  const switchName = () => {
    console.log('Was clicked!');
    setPersonsState(
      {
        persons:
          [{ name: 'Maxamiliano', age: 29, company: 'CocaCola' },
          { name: 'George', age: 36, company: 'Oracle' },
          { name: 'Karl', age: 34, company: 'Microsoft' }]
      }
    )
  }

  return (
    <div className="App" >
      <h1>I am bobo</h1>
      <p>Working!!!</p>
      <button onClick={switchName}>Switch!</button>
      {/* <Person name="Max" age="23" />
        <Person name="Pepa" age="32" />
        <Person name="Jarda" age="56" />
        <Person name="Jirka" age="34" />
        <Person name="Max" age="12">My favourite hobbie: Racing</Person> */}
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} company={personsState.persons[0].company} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} company={personsState.persons[1].company} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} company={personsState.persons[2].company} /></div>
  );
}

export default App;