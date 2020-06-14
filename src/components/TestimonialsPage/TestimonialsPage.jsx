
import React from 'react';
import PropTypes from 'prop-types';
import css from './styles/TestimonialsPage.css';
import Layout from 'components/Layout';
import PageSection from 'components/PageSection';
import HeaderLabel from 'components/HeaderLabel';
import TestimonialCard from 'components/TestimonialsPage/TestimonialCard';

export default function TestimonialsPage(props) {
    return (
        <Layout>
            <PageSection id="testimonials-page">
                <HeaderLabel>Client Testimonials</HeaderLabel>
                <TestimonialCard photo="/images/testimonials/p1.jpeg" photoPosition="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis tortor id 
                    tortor iaculis, non euismod mi maximus. Aenean at cursus ante. Curabitur sed semper 
                    odio, vitae mollis metus. 
                </TestimonialCard>
                
                <TestimonialCard photo="/images/testimonials/p3.jpeg" photoPosition="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis tortor id 
                    tortor iaculis, non euismod mi maximus. Aenean at cursus ante.
                </TestimonialCard>
                
                <TestimonialCard photo="/images/testimonials/p2.jpeg" photoPosition="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis tortor id 
                    tortor iaculis, non euismod mi maximus. Aenean at cursus ante. Curabitur sed semper 
                    odio, vitae mollis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis tortor id 
                    tortor iaculis, non euismod mi maximus. Aenean at cursus ante. Curabitur sed semper 
                    odio, vitae mollis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis tortor id 
                    tortor iaculis, non euismod mi maximus. Aenean at cursus ante. Curabitur sed semper 
                    odio, vitae mollis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis tortor id 
                    tortor iaculis, non euismod mi maximus. Aenean at cursus ante. Curabitur sed semper 
                    odio, vitae mollis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis tortor id 
                    tortor iaculis, non euismod mi maximus. Aenean at cursus ante. Curabitur sed semper 
                    odio, vitae mollis metus. 
                </TestimonialCard>
            </PageSection>
        </Layout>
    );
}
TestimonialsPage.propTypes = {};
    