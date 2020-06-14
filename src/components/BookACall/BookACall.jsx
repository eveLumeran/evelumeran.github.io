
import React from 'react';
import PropTypes from 'prop-types';
import css from './styles/BookACall.css';
import { Button } from 'react-bootstrap';
import constants from 'lib/constants';

// See: https://mailto.now.sh/
const subject = encodeURIComponent(`Book a Call Submission [${ new Date().getTime() }]`);
const mailtoLink = `mailto:${constants.contactEmail}?subject=${subject}%20&body=Please%20enter%20your%20details%20below%0A%0AName%3A%0A%0APhone%20Number%3A%0A%0AEmail%3A%0A%0ABest%20Days%20and%20Times%20to%20Call%2FMessage%3A%0A`;

export default function BookACall(props) {
    return (
        <a 
            { ...props }
            href={mailtoLink} 
        >{ (props.children) ? props.children : 'book a call'}</a>
    );
}
BookACall.propTypes = {};
    