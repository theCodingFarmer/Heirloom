import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import About from '../components/about';
import CardGrid from '../components/card-grid';
import Contact from '../components/contact';
import WhatWeGrow from '../components/WhatWeGrow';
import Hero from '../components/hero';
import HowMembershipWorks from '../components/HowMembershipWorks';
import Layout from '../components/layout';
import RecentPosts from '../components/recent-posts';
import SEO from '../components/seo';
import { indexMenuLinks } from '../components/_config/menu-links';

const Index = ({ data }) => {
  const {
    aboutUs,
    cardGrid,
    howItWorks,
    homeHero
  } = data.sanityData.edges[0].node

  return (
    <Layout menuLinks={indexMenuLinks}>
      <SEO title="Home" />
      <Hero data={homeHero} />
      <HowMembershipWorks/>
      <About data={aboutUs} />
      <CardGrid data={cardGrid} />
      <WhatWeGrow featured={data.featuredProjects.nodes} />
      <RecentPosts data={data.blog.edges} />
      <Contact data={data.contact} />
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  {
    site {
      siteMetadata {
        author
      }
    }
    
     sanityData: allSanityPageHome {
       edges {
         node {
           id
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
                 _id
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
     }

    header: markdownRemark(fileAbsolutePath: { regex: "/content/sections/header/" }) {
      frontmatter {
        button_label
        button_link
      }
    }

    about: markdownRemark(fileAbsolutePath: { regex: "/content/sections/about/" }) {
      frontmatter {
        title
        highlights
        about_image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }

    cards: markdownRemark(fileAbsolutePath: { regex: "/content/sections/cards/" }) {
      frontmatter {
        cards {
          label
          image
          description
        }
      }
      html
    }

    featuredProjects: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fileAbsolutePath: { regex: "/content/projects/" }, frontmatter: { featured: { eq: true } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "D MMMM, YYYY")
          title
          highlights
          cover_image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
      }
    }

    blog: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: 4
      filter: { fileAbsolutePath: { regex: "/content/posts/" }, frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
            date(formatString: "D MMMM, YYYY")
            description
            cover_image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }

    contact: markdownRemark(fileAbsolutePath: { regex: "/content/sections/contact/" }) {
      frontmatter {
        phone
        email
        address
      }
      html
    }
  }
`;

// Query for all data from gql
//
// query {
//   allPageHome {
//     homeHero {
//       introduction
//       title
//       tagLine
//       description
//       ctaButtonText
//       ctaButtonLink
//       heroImage {
//         asset {
//           altText
//           url
//         }
//       }
//     }
//     howItWorks {
//       howItWorksSectionTitle
//       howItWorksSteps {
//         stepTitle
//         stepDescription
//         _key
//       }
//     }
//     aboutUs {
//       aboutUsSectionTitle
//       aboutUsHeader
//       aboutUsDescription
//       aboutUsHighlights
//       aboutUsImage {
//         asset {
//           altText
//           url
//         }
//       }
//     }
//     cardGrid {
//       cardGridSectionTitle
//       cardGridSectionDescription
//       cardGridCards {
//         cardGridCardTitle
//         cardGridCardDescription
//         cardGridCardImage {
//           asset {
//             url
//           }
//         }
//       }
//     }
//     whatWeGrow {
//       title
//       description
//       highlights
//       image {
//         asset {
//           url
//         }
//       }
//     }
//     contactUs {
//       contactUsSectionTitle
//       contactUsSectionDescription
//       contactUsAddress
//       contactUsEmail
//       contactUsPhone
//     }
//   }
// }
