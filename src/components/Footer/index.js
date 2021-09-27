import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FooterWrapper } from './styled';

const Footer = () => (
  <FooterWrapper>
    <div className="attribution">
      <div>
        Background Image by:{' '}
        <a
          target="_blank"
          href="https://unsplash.com/@inincurtain"
          rel="noreferrer"
        >
          Curtain inin
        </a>
      </div>
      <span>{` | `}</span>
      <div>
        Illustration by: Rudityas{' '}
        <a target="_blank" href="https://www.glazestock.com/" rel="noreferrer">
          Glazestock
        </a>
      </div>
    </div>
    <div className="footer-socials">
      <a target="_blank" href="https://github.com/ohmymario" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/mario-b-062470173/"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  </FooterWrapper>
);

export default Footer;
