import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const WorkProject = ({ children }) => (
  <Project>
    {children}
  </Project>
);

export default WorkProject;


WorkProject.propTypes = {
  children: PropTypes.node.isRequired,
};

const Project = styled.section`
  grid-column: span 12;
  font-family: 'Merriweather', serif;
  @media (min-width: ${(props) => props.theme.mq.large}) {
    grid-column: span 6;
  }
`;
