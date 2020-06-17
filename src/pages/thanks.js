import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ThanksPage = () => (
  <Layout>
    <SEO title="Thanks!" />
    <Thanks>
      <>
        <h2>
          Thank you for getting in touch!
        </h2>
        <p>I&apos;ll get back to you as soon as I can.</p>
        <p><Link to="/">Return to homepage</Link></p>
      </>
    </Thanks>
  </Layout>
);

export default ThanksPage;

const Thanks = styled.section`
  grid-column: 3 / span 8;
  font-family: 'Merriweather', serif;
  text-align: center;
  h2 {
    font-size: 2em;
  }
  p {
    font-size: 1.425em;
    > a {
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
  }
`;