import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import portfolioData from './worksData';
import { WorkItem, WorkImage } from './styled';

import AniLink from 'gatsby-plugin-transition-link/AniLink';

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
            <AniLink
              paintDrip
              to={`/projects/${work.slug}`}
              hex="#5A67D8"
              className="work-link"
              duration={0.5}
            >
              <WorkImage fluid={image.node.childImageSharp.fluid} />
            </AniLink>

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
