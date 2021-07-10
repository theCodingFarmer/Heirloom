import styled from '@emotion/styled';
import Image from 'gatsby-plugin-sanity-image';
import React from 'react';
import HighlightList from './HighlightList';
import { mq } from './_shared/media';
import { StyledH1, StyledH2 } from './_shared/styled-headings';
import { StyledStaticImageContainer } from './_shared/styled-image-container';
import { StyledSection } from './_shared/styled-section';
import PropTypes from 'prop-types';

const StyledAboutContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2.5rem;
  padding: 2.5rem 0;

  ${mq.gt.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const StyledTextSection = styled.section`
  color: var(--paragraph-text-dark);
  white-space: pre-line;
`;

const About = ({ data }) => {

  const {
    aboutUsDescription,
    aboutUsHeader,
    aboutUsHighlights,
    aboutUsImage,
    aboutUsSectionTitle
  } = data;

  console.log('aboutUsImage', aboutUsHighlights);
  return (
    <StyledSection id="about">
      <StyledH1>{aboutUsSectionTitle}</StyledH1>
      <StyledAboutContainer>
        {aboutUsImage && (
          <StyledStaticImageContainer>
            <Image {...aboutUsImage}/>
          </StyledStaticImageContainer>
        )}
        <div>
          <StyledH2>{aboutUsHeader}</StyledH2>
          <StyledTextSection dangerouslySetInnerHTML={{__html: aboutUsDescription}} />
          <HighlightList highlights={aboutUsHighlights} />
        </div>
      </StyledAboutContainer>
    </StyledSection>
  );
};

About.propTypes = {
  data: PropTypes.object.isRequired
};

export default About;
