import styled from '@emotion/styled';
import React from 'react';
import {HeirloomIcon} from './icon';
import { mq } from './_shared/media';
import { StyledH1 } from './_shared/styled-headings';
import { StyledSection } from './_shared/styled-section';

const StyledContactSection = styled(StyledSection)`
  color: var(--paragraph-text-accent);
  margin-bottom: 70px;
`;
const StyledContainer = styled.section`
  display: flex;
  align-items: center;

  & > svg {
    font-size: 2rem;
    margin-right: 0.75rem;
  }
`;
const StyledFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > a {
    font-size: 0.75rem;
    font-weight: 500;
  }
`;
const StyledForm = styled.div`
  color: var(--title-color-dark);
  font-weight: normal;
`;
const StyledTextSection = styled.section`
  color: var(--paragraph-text-dark);
  white-space: pre-line;
  width: 100%;
  max-width: 500px;
  margin-left: 3px;
  margin-bottom: 1rem;
`;
const StyledSeparator = styled.div`
  height: 1px;
  width: 50%;
  background-color: var(--body-color);
`;
const StyledContacts = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  width: 100%;
  margin-top: 2rem;

  ${mq.gt.xs} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mq.gt.sm} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const iconStyle = {
    marginRight: '0.75rem',
    lineHeight: '0.75rem'
}

const Contact = ({ data }) => {
  const {
      contactUsSectionTitle,
      contactUsSectionDescription,
      contactUsAddress,
      contactUsEmail,
      contactUsPhone
  } = data;

  const googleMapsLink = `https://www.google.com/maps/place/33737+H+Ave,+Earlham,+IA+50072/@41.5498879,-94.1495922,16.64z/data=!4m5!3m4!1s0x87ec4222522b09c9:0xefe621f2a0e73555!8m2!3d41.5498527!4d-94.1468346`;

  return (
    <React.Fragment>
      <StyledContactSection id="contact">
        <StyledH1>{contactUsSectionTitle}</StyledH1>
        <StyledTextSection dangerouslySetInnerHTML={{ __html: contactUsSectionDescription }} />
        <StyledSeparator />
        <StyledContacts>
          {contactUsAddress && (
            <StyledContainer>
              <HeirloomIcon
                  color={'var(--paragraph-text-accent)'}
                  icon='sign'
                  style={iconStyle}
              />
              <StyledFormContainer>
                <StyledForm>Address</StyledForm>
                <a href={googleMapsLink}>{contactUsAddress}</a>
              </StyledFormContainer>
            </StyledContainer>
          )}
          {contactUsEmail && (
            <StyledContainer>
              <HeirloomIcon
                  color={'var(--paragraph-text-accent)'}
                  icon='envelope'
                  style={iconStyle}
              />
              <StyledFormContainer>
                <StyledForm>E-Mail</StyledForm>
                <a href={`mailto:${contactUsEmail}`}>{contactUsEmail}</a>
              </StyledFormContainer>
            </StyledContainer>
          )}
          {contactUsPhone && (
            <StyledContainer>
              <HeirloomIcon
                  color={'var(--paragraph-text-accent)'}
                  icon='phone'
                  style={iconStyle}
              />
              <StyledFormContainer>
                <StyledForm>Phone</StyledForm>
                <a href={`tel:+1${contactUsPhone}`}>{contactUsPhone}</a>
              </StyledFormContainer>
            </StyledContainer>
          )}
        </StyledContacts>
      </StyledContactSection>
    </React.Fragment>
  );
};

export default Contact;
