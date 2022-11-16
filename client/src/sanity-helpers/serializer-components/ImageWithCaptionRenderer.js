import styled from '@emotion/styled';
import {mq} from '../../components/_shared/media';
import {urlFor} from '../url-helpers';
import React from 'react';

const StyledImageContainer = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    width: 100%;
    border-top: 1px solid var(--primary-color);
    border-bottom: 1px solid var(--primary-color);
    padding: 1rem;
    margin: 2rem 0;
    align-items: center;
    
    ${mq.lt.md} {
      flex-direction: column;
      padding: 1rem 0;
    }
`;

const StyledCaption = styled.p`
    font-size: 0.8rem;
    margin: 1rem;
    
    ${mq.lt.md} {
      margin: 0.4rem 0;
    }
`;

const StyledImageBlogImage = styled.img`
    max-height: 400px;
    max-width: 50%;
    object-fit: contain;
    height: auto;
    
    ${mq.lt.md} {
      margin: 0.4rem 0;
      max-width: 100%;

    }
`;

const ImageWithCaptionRenderer = (props) => {
    if (props.node.image.asset._ref) {
        return (
            <StyledImageContainer>
                <StyledImageBlogImage src={urlFor(props.node.image.asset._ref)}/>
                {props.node.imageCaption && <StyledCaption>{props.node.imageCaption}</StyledCaption>}
            </StyledImageContainer>
        );
    }

    return null;
}

export default ImageWithCaptionRenderer;
