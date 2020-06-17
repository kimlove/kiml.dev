import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Tag>
      &lt;Intro&gt;
    </Tag>
    <Keyline />
      <CopyBlock>
        <p><strong>Hey. I’m Kim, a creative web developer with an extensive background designing &amp; building ecommerce websites. I&apos;m based in Manchester, UK.</strong></p>
        <p>With over 20 years of web experience in design and development, I&apos;ve led front-end development on projects for some of the world&apos;s biggest technology brands including Samsung, Huawei, Microsoft &amp; Google.</p>
        {/*<p>Currently focussing on React &amp; Javascript development, plus the new styling opportunities this enables like Styled Components / CSS-in-JS.</p>*/}
        <p>I am currently working as a front-end developer with a strong working of knowledge React &amp; Javascript, along with the new styling opportunities this enables, such as Styled Components / CSS-in-JS.</p>
        <p>And lastly, a quick note to say thanks for dropping by!</p>
      </CopyBlock>
    <Tag>
      &lt;/Intro&gt;
    </Tag>

    <Tag>
      &lt;Current&gt;
    </Tag>
    <Keyline />
      <SkillsBlock className="reset-list">
        <li>React</li>
        <li>JavaScript (ES6)</li>
        <li>Styled Components</li>
        <li>CSS 3 / SASS / SCSS</li>
        <li>UI Design</li>
        <li>RWD</li>
        <li>HTML 5</li>
        <li>Git (CLI) / GitHub </li>
        <li>Photoshop</li>
        <li>Gatsby</li>
        <li>Webpack 4</li>
        <li>JSON API</li>
        <li>Perf. Optimisation</li>
        <li>Razor (.NET)</li>
        <li>Google Analytics</li>
        <li>Visual Studio</li>
        <li>Jira</li>
        <li>Agile development</li>
        <li>Octopus Deploy</li>
        <li>Remote Working</li>
      </SkillsBlock>
    <Tag>
      &lt;/Current&gt;
    </Tag>

  </Layout>
);

export default IndexPage;

const Tag = styled.div`
  grid-column: 1 / span 2;
  font-size: 1.125em;
  letter-spacing: .2em;
  font-weight: 300;
  text-transform: uppercase;
  opacity: .33;
  @media (min-width: ${(props) => props.theme.mq.medium}) {
    grid-column: 2 / span 2;
  }
`;

const Keyline = styled.span`
  display: none;
  @media (min-width: ${(props) => props.theme.mq.medium}) {
    display: block;
    grid-column: 2 / span 1;
    background-image: linear-gradient(
      to right,
      transparent calc(50% - 2px), rgba(255,255,255,.2)  calc(50% - 1px),
      rgba(255,255,255,.2) calc(50% + 1px),
      transparent calc(50% + 2px))
    ;
  }
`;

const CopyBlock = styled.section`
  grid-column: 1 / span 12;
  font-family: 'Merriweather', serif;
  @media (min-width: ${(props) => props.theme.mq.medium}) {
    grid-column: 3 / span 8;
  }
  p {
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
    &:hover {
      background-position: 0 2px; 
    }
  }
`;

const SkillsBlock = styled.ul`
  grid-column: 3 / span 8;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1.5rem; 
  > li {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: span 8;
    padding: 1em .5em;
    font-size: 1.125em;
    font-weight: 300;
    line-height: 1.2;
    min-height: 5em;
    text-transform: uppercase;
    text-align: center;
    background-image: linear-gradient(135deg, rgba(255,255,255,.175) 0, rgba(255,255,255,.1125) 100%);
    clip-path: polygon(100% 65%, 90% 100%, 0% 100%, 0% 35%, 10% 0%, 100% 0%);
    text-shadow: 1px 1px 0 rgba(0,0,0,1), 2px 2px 0 rgba(0,0,0,.5);
    @media (min-width: ${(props) => props.theme.mq.medium}) {
      clip-path: polygon(100% 80%, 90% 100%, 0% 100%, 0% 20%, 10% 0%, 100% 0%);
      grid-column: span 4;
    }
    @media (min-width: ${(props) => props.theme.mq.large}) {
      grid-column: span 2;
    }
  }
`;
