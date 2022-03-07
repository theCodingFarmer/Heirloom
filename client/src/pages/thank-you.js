import styled from '@emotion/styled';
import React from 'react';
import SmileyDead from '../assets/smiley-dead.svg';
import Layout from '../components/layout';
import TextLink from '../components/links/text-link';
import SEO from '../components/seo';
import { blogMenuLinks } from '../components/_config/menu-links';
import { flexCenter } from '../components/_shared/styled-mixins';
import { StyledSection } from '../components/_shared/styled-section';

const StyledThankYouPage = styled(StyledSection)`
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

const ThankyouPage = () => (
    <Layout menuLinks={blogMenuLinks}>
        <StyledThankYouPage>
            <SEO title="404: Not found" />
            <StyledIntroduction>Thank you for your business!</StyledIntroduction>
            <StyledDescription>We could not do any of this without you!!</StyledDescription>
            <TextLink label="Take me home" link="/" />
        </StyledThankYouPage>
    </Layout>
);

export default ThankyouPage;
