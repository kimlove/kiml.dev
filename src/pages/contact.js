// https://github.com/sw-yx/gatsby-netlify-form-example-v2/blob/master/src/pages/contact.js

import React, { useState } from 'react';
// import { Link } from 'gatsby';
import { navigate } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Button from '../components/shared/button';

const ContactPage = () => {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  return (
    <Layout>
      <SEO title="Contact" />
      <Intro>
        <p>Thanks for visiting, I would love to hear from you. Feel free to drop me a mail at <strong><a href="mailto:hello@kiml.dev">hello@kiml.dev</a></strong>, or just fill in the form below.</p>
      </Intro>
      <Contact>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              Don’t fill this out:
              {' '}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </div>
          <div>
            <label>
              Name:
              <br />
              <input type="text" name="name" onChange={handleChange} required />
            </label>
          </div>
          <div>
            <label>
              Email:
              <br />
              <input type="email" name="email" onChange={handleChange} required />
            </label>
          </div>
          <div>
            <label>
              Message:
              <br />
              <textarea name="message" onChange={handleChange} required />
            </label>
          </div>
          <ButtonRow>
            <Button label="Send!" type="submit" />
          </ButtonRow>
        </form>
      </Contact>
    </Layout>
  );
};

export default ContactPage;


const Intro = styled.div`
  grid-column: 3 / span 8;
  text-align: center;
  margin-top: 1em;
  p {
    font-family: 'Merriweather', serif;
    font-size: 1.425em;
    margin: 0;
  }
  a {
    display: inline-block;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    background-image: linear-gradient(to bottom, transparent calc(100% - 3px), #fff calc(100% - 2px), #fff 100%);
    background-repeat: no-repeat;
    transition: background-position .075s ease;
    text-shadow: 2px 2px 0 #000;
    &:hover {
      background-position: 0 2px; 
    }
  }
`;

const Contact = styled.div`
  grid-column: 1 / span 12;
  font-size: 1.25em;
  @media (min-width: ${(props) => props.theme.mq.medium}) {
    grid-column: 3 / span 8;
  }
  @media (min-width: ${(props) => props.theme.mq.large}) {
    grid-column: 5 / span 4;
  }
  input,textarea { 
    width: 100%;
    font-size: 1em;
    padding: .5em .75em;
    border: 1px solid #fff;
    background-color: rgba(0,0,0,.5);
    color: #fff;
    font-size: 1.125rem;
    box-shadow: .25em .25em 0 #000;
  }
  textarea {
    min-height: 15em;
  }
  div {
    margin-bottom: 1em;
  }
  
`;

const ButtonRow = styled.div`
  text-align: center;
`;

