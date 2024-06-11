const path = require('path');
const fs = require('fs').promises;

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve('src/templates/project.js');

  try {
    const data = await fs.readFile('./src/data/portfolioData.json', 'utf8');
    const portfolioData = JSON.parse(data);

    portfolioData.forEach((project) => {
      createPage({
        path: `/projects/${project.slug}`,
        component: projectTemplate,
        context: {
          name: project.name,
          project_url: project.project_url,
          github_url: project.github_url,
          tech: project.tech,
          image: `works/${project.image}`, // Pass the complete relative path
          slug: project.slug,
        },
      });
    });
  } catch (error) {
    console.error('Error loading portfolio data:', error);
  }
};
