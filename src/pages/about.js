/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Title from '../components/shared/title';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <About>
      <p><strong>Here’s little more info about me and my career so far&hellip; I’ll try and keep it brief!</strong></p>
      <p>Husband, Dad to two awesome kids (5 &amp; 8) and two cute, but slightly antisocial rabbits – I love music, tech, console gaming and craft beer.</p>
      <Title titleText="Quick career recap" type="small" />
      <p>After graduating from the Bradford University (1999), I took a web design role at <a href="https://www.nmr.co.uk/" target="_blank" rel="noreferrer noopener nofollow">NMR</a> in Wiltshire. I redesigned a number of the company’s sites and built a couple of multimedia CD-ROMs to promote in-house software. </p>
      <p>12 months later, I moved to Manchester and took a web role at Cheadle based agency RDi. After a merger, I joined their digital advertising subsidiary ScreenFX, to help build their interactive shopping centre app.</p>
      <p>In 2003, I relocated to London and started at print and digital agency <a href="https://www.madeyoulook.co.uk/" target="_blank" rel="noreferrer noopener nofollow">Made You Look</a>. I maintained sites for all existing clients (including Yoplait, Petits Filous and Um Bongo) and built small ecommerce sites for new clients.</p>
      <p>In 2006, I moved back to Manchester and started at Expansys as a front-end designer. After a floating (2007), some company acquisitions (2010), Peter Jones took over Expansys in 2014 and renamed the company <a href="https://www.brandpath.com/" target="_blank" rel="noreferrer noopener nofollow">Brandpath</a> in 2015.</p>
      <p>As Brandpath, we&apos;ve focused on providing ecommerce solutions for some of the biggest names in tech, including Samsung, Huawei and Sony.</p>
      <p>For more details on some of my previous projects, check out my <Link to="/work/">Work</Link> page.</p>
    </About>
  </Layout>
);

export default AboutPage;


const sharedStyles = css`
  p {
    font-family: 'Merriweather', serif;
    font-size: 1.425em;
    > strong {
      font-size: 1.425em;
    }
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
    white-space: nowrap;
    &:hover {
      background-position: 0 2px; 
    }
  }
`;

const About = styled.section`
  grid-column: 1 / span 12;
  ${sharedStyles}
  @media (min-width: ${(props) => props.theme.mq.large}) {
    grid-column: 3 / span 8;
  }
`;
