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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    bot: '',
  });
  const [bot, setBot] = useState();

  const [submitMessage, setSubmitMessage] = useState('Send Message');
  const [submit, setSubmit] = useState(false);

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setBot();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const body = encode({
      'form-name': form.getAttribute('name'),
      ...formData,
      bot,
    });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
      .then((res) => {
        setSubmit(true);
        if (res.status === 200) {
          setSubmitMessage('Message Sent ✉');
        } else {
          setSubmitMessage('Something went wrong');
          throw new Error('Something went wrong');
        }

        setTimeout(function () {
          setSubmitMessage('Send Message');
          setSubmit(false);
        }, 2500);

        resetForm();
      })
      .catch((error) => {
        alert(error);
        setTimeout(function () {
          setSubmitMessage('Send Message');
          setSubmit(false);
        }, 2000);
      });
  };

  // .then(() => navigate(form.getAttribute('action')))

  return (
    <>
      <Wrapper>
        <Content>
          <ContactWrapper>
            <InfosWrapper submit={submit}>
              <div className="contact-message">
                <h1>Let's Talk</h1>
                <p>
                  {/* Let's get in touch, for any job opportunities or even simply
                  say hi, if you are feeling really adventurous, just drop me a
                  line. */}
                  If you would like to chat, I'm currently open for job
                  opportunities. Easiest way is to send me a message using the
                  form below.
                </p>
              </div>

              <div className="contact-links">
                <p className="contact-link">
                  You can connect with me via{' '}
                  <a href="https://www.linkedin.com/in/mariojballesteros/">
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
                      onChange={handleChange}
                      value={formData.name}
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
                      onChange={handleChange}
                      value={formData.email}
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
                      onChange={handleChange}
                      value={formData.subject}
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
                      onChange={handleChange}
                      value={formData.message}
                      name="message"
                      required
                    />
                  </label>
                </p>

                <button className="form-submit" type="submit">
                  {submitMessage}
                </button>
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
