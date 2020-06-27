
import React from 'react';
import css from './styles/Footer.css';
import constants from 'lib/constants';
import BookACall from 'components/BookACall';

export default function Footer() {
    return (
        <footer className={`${ css.footerCon } fixed-bottom text-center p-2`}>
            <a href={ constants.uri.facebook } target="_blank" rel="noreferrer">
                <i className="fab fa-facebook"></i>
                Facebook
            </a>
            <BookACall>
                <i className="fas fa-handshake"></i>
                Book a Call
            </BookACall>
            <a href={ `tel:${ constants.phoneNumberRaw }` } target="_blank" rel="noreferrer">
                <i className="fas fa-phone-square-alt"></i>
                +{ constants.phoneNumber }
            </a>
        </footer> 
    );
}
    