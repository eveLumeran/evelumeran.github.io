
import React from 'react';
import PropTypes from 'prop-types';
import css from './styles/TestimonialsPage.css';
import Layout from 'components/Layout';
import PageSection from 'components/PageSection';
import HeaderLabel from 'components/HeaderLabel';
import TestimonialCard from 'components/TestimonialsPage/TestimonialCard';
import { Container, Col, Row } from 'react-bootstrap';

export default function TestimonialsPage(props) {
    return (
        <Layout>
            <PageSection id="testimonials-page">
                <HeaderLabel>Client Testimonials</HeaderLabel>
                <Container>
                    <Row>
                        <Col xs={10} className="mx-auto">
                            <TestimonialCard 
                                photo="/images/testimonials/sample1.png" 
                                clientName="Jack Doe" 
                                clientTitle="CEO"
                                photoPosition="left"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis tortor id 
                                tortor iaculis, non euismod mi maximus. Aenean at cursus ante. Curabitur sed semper 
                                odio, vitae mollis metus. 
                            </TestimonialCard>
                            
                            <TestimonialCard 
                                photo="/images/testimonials/sample2.png" 
                                clientName="Mary Doe" 
                                clientTitle="Web Developer"
                                photoPosition="right"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis tortor id 
                                tortor iaculis, non euismod mi maximus. Aenean at cursus ante.
                            </TestimonialCard>
                            
                            <TestimonialCard 
                                photo="/images/testimonials/sample3.png" 
                                clientName="Jane Doe" 
                                clientTitle="Product Engineer"
                                photoPosition="left"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis tortor id 
                                tortor iaculis, non euismod mi maximus. Aenean at cursus ante. Curabitur sed semper 
                                odio, vitae mollis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis tortor id 
                                tortor iaculis, non euismod mi maximus. Aenean at cursus ante. Curabitur sed semper. 
                            </TestimonialCard>
                            
                            <TestimonialCard 
                                photo="/images/testimonials/sample4.png" 
                                clientName="Andy Doess" 
                                clientTitle="Music Producer"
                                photoPosition="right"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis tortor id 
                                tortor iaculis, non euismod mi maximus. Aenean at cursus ante. Curabitur sed semper 
                                odio, vitae mollis metus.
                            </TestimonialCard>
                            
                            <TestimonialCard 
                                photo="/images/testimonials/sample5.png" 
                                clientName="Arthur Mike" 
                                clientTitle="Lawyer"
                                photoPosition="left"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis tortor id 
                                tortor iaculis, non euismod mi maximus. Aenean at cursus ante. Curabitur sed semper 
                                odio, vitae mollis metus. Aenean at cursus ante. Curabitur sed semper 
                                odio, vitae mollis metus.
                            </TestimonialCard>
                            
                            <TestimonialCard 
                                photo="/images/testimonials/sample6.png" 
                                clientName="Peter Mone" 
                                clientTitle="Customer Relations Supervisor"
                                photoPosition="right"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis tortor id 
                                tortor iaculis, non euismod mi maximus..
                            </TestimonialCard>
                        </Col>                    
                    </Row>
                </Container>
            </PageSection>
        </Layout>
    );
}
TestimonialsPage.propTypes = {};
    