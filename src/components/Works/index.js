import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Content from '../Common/Content';
import Wrapper from '../Common/Wrapper';
import portfolioData from './worksData';

import { WorksContainer, WorkItem, WorkImage } from './styled';

const Works = () => (
  <>
    <Wrapper>
      <Content>
        <h1>My Works</h1>
        <p>various projects i've made</p>
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
              fluid(maxWidth: 500, quality: 100) {
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
      {data.allFile.edges.map((image, i) => (
        <a
          href={portfolioData[i].url}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
        >
          <WorkImage
            imgStyle={{ objectPosition: 'top' }}
            fluid={image.node.childImageSharp.fluid}
          />
        </a>
      ))}
    </WorkItem>
  );
};

export default Works;
