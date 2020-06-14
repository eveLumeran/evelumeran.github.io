
import React from 'react';
import PropTypes from 'prop-types';
import css from './styles/HeaderLabel.css';

export default function HeaderLabel(props) {
    return (
        <>
            <h1 className={ css.header }>{ props.children }</h1>
            <div className={css.separator}><div></div></div>
        </>
    );
}
HeaderLabel.propTypes = {};
    