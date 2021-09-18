import styled from '@emotion/styled';
import Image from 'gatsby-plugin-sanity-image';
import {mq} from './media';

export const StyledImageContainer = styled.div`
  min-width: 300px;
  min-height: 200px;
  position: relative;

  & .gatsby-image-wrapper * {
    transition: transform var(--transition-fast) ease-in-out !important;
  }

  &:hover .gatsby-image-wrapper * {
    transform: scale(1.1);
  }
`;

export const StyledStaticImageContainer = styled.div`
  min-width: 300px;
  min-height: 200px;
  position: relative;

  .gatsby-image-wrapper {
    overflow: unset !important;
  }

  .gatsby-image-wrapper:before {
    content: '';
    position: absolute;
    bottom: -10px;
    right: -10px;
    width: 98%;
    height: 98%;
    border: 2px solid var(--primary-color);
    transition: all ease var(--transition-fast);
  }
`;

export const StyledSanityImageContainer = styled.div`
    width: 100%;
    overflow: hidden;
    
    ${mq.lt.sm} {
        height: auto;
        max-height: 450px;
    }
    
    ${mq.gt.sm} {
        height: 275px;
    }
`;

export const StyledSanityImage = styled(Image)`
    width: 100%;
    background-image: url('${props => props.imageUrl}');
    background-repeat: no-repeat;
    background-position: center;
    transition: all ease var(--transition-fast);
    
    &:hover {
      transform: scale(1.1);
    }
    
    ${mq.lt.sm} {
        height: auto;
        max-height: 450px;
    }
    
    ${mq.gt.sm} {
        height: 275px;
    }
`;

export const StyledSanityBlogImageContainer = styled.div`
    width: 100%;
    height: 275px;
    overflow: hidden;
`;

export const StyledSanityBlogImage = styled.div`
    width: 100%;
    height: 275px;
    background-image: url('${props => props.imageUrl}');
    background-repeat: no-repeat;
    background-position: center;
    transition: all ease var(--transition-fast);
    
    &:hover {
      transform: scale(1.1);
    }
`;
