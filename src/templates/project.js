import React from 'react';
import Layout from '../components/Layout';

const ProjectTemplate = ({ pageContext }) => {
  const { name, tech, url } = pageContext;

  return (
    <Layout>
      <div>
        <h1>{name}</h1>
        <p>{tech}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </Layout>
  );
};

export default ProjectTemplate;
