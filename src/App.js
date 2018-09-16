import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Divyam', age: 21 },
      { id: 2, name: 'Divyansh', age: 20 },
      { id: 3, name: 'Mayvid', age: 17 }
    ],
    show: false
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  nameChangeHandler = (event, id) => {
    const index = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[index] };
    person.name = event.target.value;
    const array = [...this.state.persons];
    array[index] = person;
    this.setState({
      persons: array
    });
  };

  showPersonHandler = () => {
    const doesShow = this.state.show;
    this.setState({
      show: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.show) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
              key={person.id}
              changed={event => this.nameChangeHandler(event, person.id)}
            />;
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app.</h1>
        <p className={classes.join(' ')}>Working nicely...</p>
        <button style={style} onClick={this.showPersonHandler}>Switch names</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React app!'));
  }
}

export default App;
