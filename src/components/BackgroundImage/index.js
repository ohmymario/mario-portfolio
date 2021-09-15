import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg3.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => {
      const style = {
        // Defaults are overwrite-able by setting one or each of the following:
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'repeat-y',
      };
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage
          style={style}
          fluid={imageData}
          backgroundColor="#5A67D8"
        >
          {children}
        </BackgroundImage>
      );
    }}
  />
);

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: top center;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default StyledBackgroundSection;
