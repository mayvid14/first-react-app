import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js -> Inside constructor', props);
    this.state = {
      persons: [
        { id: 1, name: 'Divyam', age: 21 },
        { id: 2, name: 'Divyansh', age: 20 },
        { id: 3, name: 'Mayvid', age: 17 }
      ],
      show: false
    };
  }

  componentWillMount() {
    console.log('App.js -> Inside component will mount');
  }

  componentDidMount() {
    console.log('App.js -> Inside component did mount');
  }

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
    console.log('App.js -> render');
    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.show) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}
      />;

      style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <Cockpit
          persons={this.state.persons}
          style={style}
          show={this.state.show}
          click={this.showPersonHandler} />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React app!'));
  }
}

export default App;
