
import React from 'react';
import PropTypes from 'prop-types';
import css from './styles/TestimonialCard.css';
import { Container, Col, Row } from 'react-bootstrap';

export default function TestimonialCard(props) {
    return (
        <div 
            className={ 
                `${ css.testimonialCardCon } 
                my-5 
                py-5 
                ${ (props.photoPosition === 'right') ? css.darkerShade : '' }`
            }
        >
            <Container>
                <Row>
                    <Col 
                        md={{span: 3, order: (props.photoPosition === 'right') ? 'last' : 'first'}} 
                        className="px-0"
                    >
                        <picture className={`${ css.pictureCon } mx-auto`}>
                            <img className={css.photo} src={props.photo} />
                        </picture>    
                    </Col>
                    <Col md={9} className="px-0">
                        <div className={`${ css.txt } my-1 h-100 ${(props.photoPosition === 'right') ? 'text-right' : 'text-left'}`}>
                            <div className={css.clientName}>{props.clientName}</div>
                            <sub className={css.clientTitle}>{props.clientTitle}</sub>
                            <p className={css.testimonialText}>{ props.children }</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
TestimonialCard.propTypes = {
    photo: PropTypes.string.isRequired,
    photoPosition: PropTypes.string.isRequired,
    clientName: PropTypes.string.isRequired,
    clientTitle: PropTypes.string.isRequired,
    children: PropTypes.node
};
    