import styled from '@emotion/styled';
import React from 'react';
import Layout from '../../../components/layout';
import TextLink from '../../../components/links/text-link';
import SEO from '../../../components/seo';
import { blogMenuLinks } from '../../../components/_config/menu-links';
import { StyledSection } from '../../../components/_shared/styled-section';
import PropTypes from 'prop-types';
import {locationObjectShape} from '../../../prop-shapes/prop-type-shapes';

const StyledThankYouSection = styled(StyledSection)`
  min-height: 100vh;
`;
const StyledIntroduction = styled.div`
  color: var(--primary-color);
  margin-left: 3px;
  font-weight: normal;
`;

const StyledDescription = styled.p`
  padding: 0 0.5rem;
  margin: 0;
`;

const ThankYou = ({location}) => (
    <Layout location={location} menuLinks={blogMenuLinks}>
    <StyledThankYouSection>
      <SEO title="Thank you for your support!" />
      <StyledIntroduction>Thank you!</StyledIntroduction>
      <StyledDescription>We could not do this without you and are so grateful for your support.</StyledDescription>
      <TextLink label="Take me home" link="/" />
    </StyledThankYouSection>
  </Layout>
);

export default ThankYou;

ThankYou.propTypes = {
    location: PropTypes.objectOf(locationObjectShape).isRequired
};
