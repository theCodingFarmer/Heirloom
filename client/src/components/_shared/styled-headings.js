import styled from '@emotion/styled';

export const StyledH1 = styled.h1`
    width: 100%;
    position: relative;
    font-weight: 800;
    margin: 20px 0;

    &:first-letter {
        color: var(--primary-color);
    }

    &:after {
        background-color: var(--primary-color);
        content: '';
        position: absolute;
        top: -30px;
        left: 0;
        width: 30px;
        height: 2px;
    }
`;

export const StyledH2 = styled.h2`
    color: var(--title-color-dark);
    margin: 20px 0;
    position: relative;
    
    &:after {
        background-color: var(--primary-color);
        content: '';
        position: absolute;
        top: -20px;
        left: 0;
        width: 30px;
        height: 2px;
    }
`;

export const StyledSpan = styled.span`
    width: 100%;
    position: relative;
    
    &:first-letter {
        font-weight: 500;
        color: var(--primary-color);
    }
`;

export const StyledNavigationSpan = styled.span`
    padding: 0 50%
    width: 100%;
    position: relative;
    
    &:first-letter {
        font-weight: 500;
        color: var(--primary-color);
    }
`;
