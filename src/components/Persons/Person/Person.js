import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('Person.js -> Inside constructor', props);
    }

    componentWillMount() {
        console.log('Person.js -> Inside component will mount');
    }

    componentDidMount() {
        console.log('Person.js -> Inside component did mount');
    }

    render() {
        console.log('Person.js -> Inside render');
        return (
            <div className="Person">
                <p onClick={this.props.click}>I'm {this.props.name}! I am {this.props.age} years old. {this.props.children}</p>
                <input type="text" value={this.props.name} onChange={this.props.changed} />
            </div>
        );
    }
}

export default Person;