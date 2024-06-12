import styled from 'styled-components';

export const Wrapper = styled.div`
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

export const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  .gatsby-image-wrapper {
    width: 100%;
    height: auto;
  }
`;

export const ProjectInfo = styled.div`
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

export const ProjectLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
