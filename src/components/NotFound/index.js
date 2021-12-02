import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { NotFoundWrapper, ImageContainer } from './styled';

const NotFound = () => (
  <NotFoundWrapper>
    <ImageContainer>
      <Image />
    </ImageContainer>
    <h2>
      Looks like there's nothing here. Let's go back{' '}
      <AniLink paintDrip hex="#5A67D8" to="/">
        home
      </AniLink>
    </h2>
  </NotFoundWrapper>
);

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "404/404.png" }) {
        childImageSharp {
          fluid(maxWidth: 550, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default NotFound;
