
import React from 'react';
import PropTypes from 'prop-types';
import css from './styles/TestimonialCard.css';

export default function TestimonialCard(props) {
    return (
        <div className={ `${ css.testimonialCardCon } p-3 py-4 my-5 ${ css['photoPosition-' + props.photoPosition]}`}>
            <picture className={`${ css.pictureCon } rounded-circle`}>
                <img className={css.photo} src={props.photo} />
            </picture>            
            <div className={`${ css.txt } my-1 h-100`}>{ props.children }</div>
        </div>
    );
}
TestimonialCard.propTypes = {
    photo: PropTypes.string.isRequired,
    photoPosition: PropTypes.string.isRequired
};
    