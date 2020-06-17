/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const OtherProject = ({
  year,
  client,
  subject,
  children,
  skills,
}) => (
  <OtherProjectItem>
    <Year>{year}</Year>
    <Title>
      <h3>{client}</h3>
      <h4>{subject}</h4>
    </Title>
    <Desc>
      {children}
    </Desc>
    {skills && (
      <Skills className="reset-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </Skills>
    )}
  </OtherProjectItem>
);

const OtherProjects = () => (
  <>
    <OtherProject
      year="2020"
      client="Google EPP"
      subject="Internal Staff web app"
      skills={['UI Design', 'React', 'JSON', 'SCSS', 'Webpack 4']}
    >
      <p>Our team built an web app for Google to facilitate shipping devices to internal staff via a CSV ordering feed.</p>
      <p>I designed and built the front-end that used a few drop in React components for uploading files and basket editing.</p>
    </OtherProject>

    <OtherProject
      year="2015&mdash;2020"
      client="Sony"
      subject="Multi-region/lingual ecommerce store"
      skills={['UI Design', 'RWD', 'CSS/SCSS', 'jQuery', 'Grunt']}
    >
      <p>Official store selling a selection of smartphones and accessories in 20 countries in 6 languages.</p>
      <p>Our first responsive site and very popular in South Africa, Germany, Italy and Portugal.</p>
    </OtherProject>

    <OtherProject
      year="2013&mdash;2016"
      client="Orange"
      subject="Multi-region/lingual ecommerce store"
      skills={['UI Design', 'RWD', 'CSS/SCSS', 'jQuery', 'Grunt']}
    >
      <p>Official store selling a selection of smartphones and accessories in 20 countries in 6 languages.</p>
      <p>Our first responsive site and very popular in South Africa, Germany, Italy and Portugal.</p>
    </OtherProject>

    <OtherProject
      year="2008&mdash;2015"
      client="HTC"
      subject="Accessory and Device stores"
      skills={['UI Design', 'jQuery', 'HTML', 'CSS']}
    >
      <p>Expansys ran the official HTC Accessory store in around 30 EU countries, the majority in local languages.</p>
      <p>Later we partnered again to sell HTC devices direct to consumers from HTC.com.</p>
    </OtherProject>

    <OtherProject
      year="2007&mdash;2014"
      client="Parrot"
      subject="Multi-region/lingual ecommerce"
      skills={['UI Design', 'HTML', 'CSS']}
    >
      <p>Tech firm initially specialising in Bluetooth car accessories &ndash; Expansys ran their online store of a number of years.</p>
      <p>Later products included drones and audio products which we continually added to their international ecom stores.</p>
    </OtherProject>


    {/*
    <OtherProject
      year="2008"
      client="Microsoft"
      subject="Windows Mobile Device Store"
      skills={['UI Design', 'HTML', 'CSS']}
    >
    </OtherProject>
    */}

    {/* Motorola */}

    {/* Krussel / motorhead phone cases */}

    <OtherProject
      year="2005&mdash;2006"
      client="So Organic"
      subject="Health and wellbeing ecommerce "
      skills={['PHP X-Cart (reskin)', 'HTML', 'CSS', 'SEO']}
    >
      <p>So Organic was a health and wellbeing start up looking for a cost effective way to sell natural and organic products.</p>
      <p>Using an off the shelf cart, I reskinned it based on the clients design using the built-in templating system.</p>
    </OtherProject>

    <OtherProject
      year="2005"
      client="In The Sprit"
      subject="Cocktail recipe finder"
      skills={['UI Design', 'PHP', 'MySQL', 'HTML', 'CSS', 'SEO']}
    >
      <p>I rewrote the existing recipe finder which involved restructuring the database a writing a new PHP front-end.</p>
      <p>This enabled us to add new functionality using the existing data: ABV calc. / group by flavour, ingredient or glass type.</p>
    </OtherProject>

    <OtherProject
      year="2003"
      client="ScreenFX"
      subject="Digital shopping centre guide"
      skills={['UI design', 'Macromedia Director', 'Lingo', 'XML']}
    >
      <p>ScreenFX sold digital advertising in shopping centres &ndash; part of the package included touchscreen store guides.</p>
      <p>I designed and built the prototype guide app which featured live route finding on a 3D pre-rendered map.</p>
    </OtherProject>

    <OtherProject
      year="2000"
      client="Robovet"
      subject="Multimedia training CD-ROM"
      skills={['UI design', 'Macromedia Director', 'Lingo']}
    >
      <p>Robovet needed a training tool for one their desktop software application.</p>
      <p>I designed and built the multimedia app in Macromedia Director</p>
    </OtherProject>
  </>
);

export default OtherProjects;

OtherProject.propTypes = {
  year: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};


const OtherProjectItem = styled.div`
  grid-column: span 12;
  position: relative;
  border: 1px solid #666;
  padding: .5em;
  text-align: center;
  background: #0c0c0c;
  color: #eee;
  @media (min-width: ${(props) => props.theme.mq.medium}) {
    grid-column: span 6;
  }
  @media (min-width: ${(props) => props.theme.mq.xlarge}) {
    grid-column: span 4;
  }
`;

const Year = styled.div`
  background: ${(props) => props.theme.colours.nearlyBlack};
  color: #ccc;
  padding: .25em .5em;
  margin-bottom: .5em;
  letter-spacing: .1em;
  font-weight: bold;
  text-align: center;
`;

const Title = styled.div`
  h3,h4 {
    margin: 0;
  }
  h3 {
    font-size: 1.75em;
    text-transform: uppercase;
  }
  h4 {
    font-size: 1.25em;
    font-weight: 400;
    letter-spacing: .1em;
    color: #999;
  }
`;

const Desc = styled.div`
  margin: 1em 0 1.5em;
  p {
    line-height: 1.4;
    margin: .5em;
    text-align: left;
  }
`;

const Skills = styled.ul`
  background: ${(props) => props.theme.colours.nearlyBlack};
  color: #ccc;
  padding: .25em .5em;
  font-size: .875em;
  letter-spacing: .1em;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > li {
    margin: .25em .5em;
  } 
`;
