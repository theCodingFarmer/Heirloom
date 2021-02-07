import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledH2 } from './_shared/styled-headings';
import { flexEnd } from './_shared/styled-mixins';
import { StyledTextSection } from './_shared/styled-text-section';

const StyledProject = styled.article`
  display: flex;
  flex-direction: column;
  padding-top: 2.5rem;
`;
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;
const StyledInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const StyledProjectText = styled(StyledTextSection)`
  > p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
`;

const ProjectList = ({ projects }) => {
  return projects.map((project) => {
    const title = project.frontmatter.title;

    return (
      <StyledProject key={title}>
        <StyledHeader>
            <StyledH2>{title}</StyledH2>
        </StyledHeader>
        <StyledInfoContainer>
          <StyledProjectText dangerouslySetInnerHTML={{ __html: project.html }} />
        </StyledInfoContainer>
      </StyledProject>
    );
  });
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectList;
