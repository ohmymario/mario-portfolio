import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
  Wrapper,
  ImageContainer,
  ProjectInfo,
  ProjectLinks,
} from './styles/projectStyles';

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

          <ProjectLinks>
            <a href={project_url} target="_blank" rel="noopener noreferrer">
              View Project
            </a>

            <a href={github_url} target="_blank" rel="noopener noreferrer">
              View Github
            </a>
          </ProjectLinks>
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
