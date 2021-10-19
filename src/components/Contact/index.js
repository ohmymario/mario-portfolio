import React, { useState } from 'react';

import Content from '../Common/Content';
import Wrapper from '../Common/Wrapper';

import ContactImage from '../../images/contact/contact.png';

import { ContactWrapper, ImageWrapper, InfosWrapper } from './styled';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Wrapper>
        <Content>
          <ContactWrapper>
            <InfosWrapper>
              <h1>Let's Talk</h1>
              <p>
                Let's get in touch, for any job opportunities or even simply say
                hi, If you are feeling really adventurous, just drop me a line.
              </p>

              <p className="contact-links">
                You can connect with me via{' '}
                <a href="https://www.linkedin.com/in/mario-b-062470173/">
                  Linkedin.
                </a>
              </p>

              <p className="contact-links">
                If you would rather email{' '}
                <a href="mailto:mariob360@gmail.com">mariob360@gmail.com</a>
              </p>

              <form onSubmit={handleSubmit}>
                <p>
                  <label htmlFor="text">
                    Your Name:{' '}
                    <input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      name="name"
                    />
                  </label>
                </p>
                <p>
                  <label htmlFor="email">
                    Your Email:{' '}
                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      name="email"
                    />
                  </label>
                </p>
                <p>
                  <label htmlFor="message">
                    Message:{' '}
                    <textarea
                      name="message"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                    />
                  </label>
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
            </InfosWrapper>
            <ImageWrapper>
              <img src={ContactImage} alt="" />
            </ImageWrapper>
          </ContactWrapper>
        </Content>
      </Wrapper>
    </>
  );
};

export default Contact;
