import React, { useState } from 'react';

import Content from '../Common/Content';
import Wrapper from '../Common/Wrapper';

import ContactImage from '../../images/contact/contact.png';

import { ContactWrapper, ImageWrapper, InfosWrapper } from './styled';

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [bot, setBot] = useState();

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setBot();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const body = encode({
      'form-name': form.getAttribute('name'),
      name,
      email,
      message,
      bot,
    });
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
      .then(() => {
        resetForm();
      })
      .catch((error) => alert(error));
  };

  // .then(() => navigate(form.getAttribute('action')))

  return (
    <>
      <Wrapper>
        <Content>
          <ContactWrapper>
            <InfosWrapper>
              <div className="contact-message">
                <h1>Let's Talk</h1>
                <p>
                  Let's get in touch, for any job opportunities or even simply
                  say hi, if you are feeling really adventurous, just drop me a
                  line.
                </p>
              </div>

              <div className="contact-links">
                <p className="contact-link">
                  You can connect with me via{' '}
                  <a href="https://www.linkedin.com/in/mario-b-062470173/">
                    Linkedin.
                  </a>
                </p>
                <p className="contact-link">
                  Or email me{' '}
                  <a href="mailto:mariob360@gmail.com">mariob360@gmail.com</a>
                </p>
              </div>

              <form
                className="contact-form"
                name="contact"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                {/* HONEY POT */}
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label htmlFor="bot-field">
                    Don’t fill this out:{' '}
                    <input
                      name="bot-field"
                      value={bot}
                      onChange={(e) => setBot(e.target.value)}
                    />
                  </label>
                </p>
                {/* HONEY POT */}

                <p className="form-name">
                  <label htmlFor="name">
                    {/* Your Name:{' '} */}
                    <input
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      name="name"
                      type="text"
                      required
                    />
                  </label>
                </p>

                <p className="form-email">
                  <label htmlFor="email">
                    {/* Your Email:{' '} */}
                    <input
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      name="email"
                      type="email"
                    />
                  </label>
                </p>

                <p className="form-subject">
                  <label htmlFor="subject">
                    {/* Subject:{' '} */}
                    <input
                      placeholder="Subject"
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                      name="subject"
                      required
                    />
                  </label>
                </p>

                <p className="form-message">
                  <label htmlFor="message">
                    {/* Message:{' '} */}
                    <textarea
                      placeholder="Message"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      name="message"
                      required
                    />
                  </label>
                </p>

                <p className="form-submit">
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
