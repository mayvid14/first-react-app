import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {
    const classes = [];
    if (props.show) {
        props.style.backgroundColor='red';
    }
    if (props.persons.length <= 2) {
      classes.push('red');
    }
    if (props.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="Cockpit">
            <h1>Hi, I'm a React app.</h1>
            <p className={classes.join(' ')}>Working nicely...</p>
            <button style={props.style} onClick={props.click}>Switch names</button>
        </div>
    );
};

export default cockpit;