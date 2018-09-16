import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name}! I am {props.age} years old. {props.children}</p>
            <input type="text" value={props.name} onChange={props.changed} />
        </div>
    );
}

export default person;