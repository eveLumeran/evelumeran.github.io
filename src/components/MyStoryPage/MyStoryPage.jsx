import React from 'react';
import PropTypes from 'prop-types';
import css from './styles/MyStoryPage.css';
import Layout from 'components/Layout';
import PageSection from 'components/PageSection';
import HeaderLabel from 'components/HeaderLabel';

export default function MyStoryPage() {
    return (
        <Layout>
            <PageSection id="raffy-page-home">
                <HeaderLabel>My Story</HeaderLabel>
                <p style={ {marginTop: '2.6em'} } className="text-left">                
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis tortor id tortor iaculis, non euismod mi maximus. Aenean at cursus ante. Curabitur sed semper odio, vitae mollis metus. Sed sed faucibus libero, nec elementum elit. Donec rhoncus felis a varius lobortis. Etiam dictum mollis eros, ut posuere erat dignissim a. Maecenas consectetur maximus nulla ut gravida. Pellentesque nec mauris ac nulla fermentum tincidunt. Nulla et mauris ut tortor imperdiet lacinia vel et est. In sit amet congue leo, ultricies faucibus arcu. Aenean gravida nec nulla vitae vulputate. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam vehicula eros orci, et luctus urna mollis dignissim. Sed egestas efficitur leo ut viverra. Cras eu ipsum eget tellus tristique elementum viverra eget augue.
                </p> 
            </PageSection>
        </Layout>
    );
}
