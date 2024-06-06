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
              fluid(maxWidth: 500, quality: 75) {
                ...GatsbyImageSharpFluid
              }
            }
            name
          }
        }
      }
    }
  `);

  const pics = data.allFile.edges;

  const findImage = (imageName) => {
    const imageParsed = imageName.split('.')[0];
    const image = pics.find((pic) => pic.node.name === imageParsed);

    if (!image) return null;
    return image;
  };

  return (
    <WorkItem>
      {portfolioData.map((work, index) => {
        const image = findImage(work.image, work);

        return (
          <div className="work-container" key={index}>
            <a
              href={work.url}
              target="_blank"
              rel="noopener noreferrer"
              className="work-link"
            >
              <WorkImage fluid={image.node.childImageSharp.fluid} />
            </a>
            <div className="work-desc">
              <h3>{work.name}</h3>
              <p>{work.tech}</p>
            </div>
          </div>
        );
      })}
    </WorkItem>
  );
};

export default WorkItems;
