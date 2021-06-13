import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';

export const sanityHomeData = useStaticQuery(graphql`
    query HomeQuery {
      allPageHome {
        homeHero {
          introduction
          title
          tagLine
          description
          ctaButtonText
          ctaButtonLink
          heroImage {
            asset {
              altText
              url
            }
          }
        }
        howItWorks {
          howItWorksSectionTitle
          howItWorksSteps {
            stepTitle
            stepDescription
            _key
          }
        }
        aboutUs {
          aboutUsSectionTitle
          aboutUsHeader
          aboutUsDescription
          aboutUsHighlights
          aboutUsImage {
            asset {
              altText
              url
            }
          }
        }
        cardGrid {
          cardGridSectionTitle
          cardGridSectionDescription
          cardGridCards {
            cardGridCardTitle
            cardGridCardDescription
            cardGridCardImage {
              asset {
                url
              }
            }
          }
        }
        whatWeGrow {
          title
          description
          highlights
          image {
            asset {
              url
            }
          }
        }
        contactUs {
          contactUsSectionTitle
          contactUsSectionDescription
          contactUsAddress
          contactUsEmail
          contactUsPhone
        }
      }
    }
`);
