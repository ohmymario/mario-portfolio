import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #fff;
  width: 1250px;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1250px) {
    max-width: 95%;
    margin: 0 5px;
    padding: 20px 10px;
  }

  @media (max-width: 768px) {
    padding: 20px 10px;
  }

  @media (max-width: 500px) {
    padding: 20px 5px;
  }

  @media (max-width: 400px) {
    padding: 20px 2px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  .gatsby-image-wrapper {
    width: 100%;
    height: auto;
  }
`;

const ProjectInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;
  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  a {
    font-size: 1.2rem;
    color: #007acc;
    text-decoration: none;
  }
`;

const ProjectTemplate = ({ data, pageContext }) => {
  const { name, project_url, github_url, tech } = pageContext;

  return (
    <Layout>
      <Wrapper>
        <ImageContainer>
          <Img fluid={data.image.childImageSharp.fluid} alt={name} />
        </ImageContainer>
        <ProjectInfo>
          <h1>{name}</h1>
          <p>{tech}</p>

          <a href={project_url} target="_blank" rel="noopener noreferrer">
            View Project
          </a>

          <a href={github_url} target="_blank" rel="noopener noreferrer">
            View Github
          </a>
        </ProjectInfo>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query ($image: String!) {
    image: file(relativePath: { eq: $image }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default ProjectTemplate;
