import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Wrapper, ImageContainer, IntroContainer } from './styled';

const Intro = () => (
  <>
    <Wrapper>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <IntroContainer>
        <header>
          <h1>
            Hello my name is
            <b className="header-name">Mario Ballesteros</b>
          </h1>
          <h3>web dev stuffs</h3>
        </header>
      </IntroContainer>
    </Wrapper>
  </>
);

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "intro/photo3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 386, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default Intro;
