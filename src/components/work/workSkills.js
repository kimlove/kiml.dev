import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const WorkSkills = ({
  skills,
}) => (
  <Skills className="reset-list">
    {skills.map((skill) => (
      <li key={skill}>{skill}</li>
    ))}
  </Skills>
);

export default WorkSkills;

WorkSkills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Skills = styled.ul`
  border-top: 1px solid rgba(255,255,255,.1);
  border-bottom: 1px solid rgba(255,255,255,.1);
  color: #ccc;
  padding: .25em .5em;
  font-size: 1em;
  letter-spacing: .1em;
  font-weight: 300;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: 2rem;
  font-family: 'Source Sans Pro', sans-serif;
  > li {
    margin: .25em .75em;
  } 
`;