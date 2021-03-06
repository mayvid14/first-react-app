import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{
    constructor(props) {
        super(props);
        console.log('Persons.js -> Inside constructor', props);
      }
    
      componentWillMount() {
        console.log('Persons.js -> Inside component will mount');
      }
    
      componentDidMount() {
        console.log('Persons.js -> Inside component did mount');
      }
      
    componentWillReceiveProps(newProps) {
        console.log('Persons.js @@ Will recieve props', newProps);
    }
    render() {
        console.log('Persons.js -> Inside render');
        return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)}
                key={person.id}
                changed={event => this.props.changed(event, person.id)}
            />;
        });       
    }
}

export default Persons;