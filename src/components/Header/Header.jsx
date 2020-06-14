import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from './styles/Header.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import constants from 'lib/constants';
import BookACall from 'components/BookACall';

export default function Header(props) {
    
    const intialProfPicImgBase64Str = `data:image/jpeg;base64,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`;    
    const [profPicData, setProfPicData] = useState({
        webp: intialProfPicImgBase64Str,
        moz: intialProfPicImgBase64Str,
        fallback: intialProfPicImgBase64Str,
        initialProfPicClass: css['initial-profile-pic'] 
    });
    const links = [
        { link: constants.routes.myStory, linkLabel: 'My Story' },
        { link: constants.routes.whatIDo, linkLabel: 'What I do' },
        { link: constants.routes.testimonials, linkLabel: 'Testimonials' } 
    ];    
    
    function handleNavigateClick(e) {
        let id = e.currentTarget.rel,
            isExternal = !!parseInt(e.currentTarget.getAttribute('data-is-external'), 10);
        if (isExternal) {
            e.preventDefault();
            window.open(id);
            return;
        }    
    }
    
    function updateProfPicImage() {
            const i = new Image();
            //i.src = 'images/profile3_comp.webp';
            i.src = 'images/manang-profpic-orig2.png';
            i.onload = () => {
                setProfPicData({
                    // webp: 'images/profile3_comp.webp',
                    // moz: 'images/profile3_comp_moz.jpg',
                    // fallback: 'images/profile3_comp.jpg',
                    
                    webp: 'images/manang-profpic-orig2.png',
                    moz: 'images/manang-profpic-orig2.png',
                    fallback: 'images/manang-profpic-orig2.png',
                    
                    initialProfPicClass: ''
                });
            };
    }
    
    useEffect(() => {
        updateProfPicImage();
    }, []);
    return (
        <Navbar 
            collapseOnSelect 
            expand="lg" 
            bg="raffy-navbar" 
            fixed="top" 
        >
            <Navbar.Brand href={ constants.routes.myStory } className={ css['profile-pic'] }>
                <picture className={ profPicData.initialProfPicClass } title="Hi!">
                    <source type="image/webp" srcSet={ profPicData.webp } />
                    <source type="image/jpeg" srcSet={ profPicData.moz } />
                    <img src={ profPicData.fallback } alt="rafael gadionco" />
                </picture>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={ css['responsive-navbar-nav'] } />
            <Navbar.Collapse id={ css['responsive-navbar-nav'] } className="justify-content-end">
                {/* See: https://github.com/ReactTraining/react-router/issues/4463 */}
                <Nav>
                    { 
                        links.map(({ link, linkLabel, external }) => (
                            <Nav.Item key={ link }>
                                <Nav.Link 
                                    as={ Link }
                                    rel={ link } 
                                    to={ link } 
                                    data-is-external={ !!external ? 1 : 0 }
                                    onClick={ handleNavigateClick}                                     
                                    active={ window.location.pathname === link }
                                >{ linkLabel }</Nav.Link>
                            </Nav.Item>
                        )) 
                    }
                    <Nav.Item>
                        <Nav.Link as={ BookACall } className="nav-link">Book a call</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={css.onMobileOnlyNav}>
                        <Nav.Link href={ constants.uri.facebook } target="_blank" rel="noreferrer" className="nav-link">
                            Facebook
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className={css.onMobileOnlyNav}>
                        <Nav.Link href={`phone:${constants.phoneNumber}`} className="nav-link">
                            Call +{ constants.phoneNumber }
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>        
    );
}

Header.propTypes = {};