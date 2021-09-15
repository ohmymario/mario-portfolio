import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Content from '../Common/Content';
import Wrapper from '../Common/Wrapper';

import { WorksContainer, WorkItem, WorkImage } from './styled';

const Works = () => (
  <>
    <Wrapper>
      <Content>
        <h1>Work</h1>
        <p>Selected web, mobile, video projects...</p>
        <WorksContainer>
          <WorkItems />
        </WorksContainer>
      </Content>
    </Wrapper>
  </>
);

const WorkItems = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "works" } }) {
        edges {
          node {
            childImageSharp {
              id
              fluid(maxWidth: 200, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <WorkItem>
      {data.allFile.edges.map((image, key) => (
        <a
          href="https://unsplash.com/"
          target="_blank"
          rel="noopener noreferrer"
          key={key}
        >
          <WorkImage fluid={image.node.childImageSharp.fluid} />
        </a>
      ))}
    </WorkItem>
  );
};

export default Works;
