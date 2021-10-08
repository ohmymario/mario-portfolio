import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import portfolioData from './worksData';

import { WorkItem, WorkImage } from './styled';

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

  const pics = data.allFile.edges;

  return (
    <WorkItem>
      {pics.map((image, i) => {
        const regex = /[^/]*$/g;
        const num = image.node.childImageSharp.fluid.src
          .match(regex)[0]
          .match(/\d/g, '')[0];

        return (
          <div className="work-container">
            <a
              href={portfolioData[num - 1].url}
              target="_blank"
              rel="noopener noreferrer"
              className="work-link"
              key={i}
            >
              <WorkImage
                imgStyle={{ objectPosition: 'top' }}
                fluid={image.node.childImageSharp.fluid}
              />
            </a>
            <div className="work-desc">
              <h3>{portfolioData[num - 1].name}</h3>
              <p>{portfolioData[num - 1].tech}</p>
            </div>
          </div>
        );
      })}
    </WorkItem>
  );
};

export default WorkItems;
