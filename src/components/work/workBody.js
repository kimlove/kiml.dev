import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const WorkBody = ({ children }) => (
  <Body>
    {children}
  </Body>
);

export default WorkBody;


WorkBody.propTypes = {
  children: PropTypes.node.isRequired,
};

const Body = styled.div`
  padding-right: 2rem;
  line-height: 1.8;
  p {
    font-size: 1.125em;
  }
  ul {
    border: 1px dashed rgba(255,255,255,.33);
    padding: 1em 2.5em;
    margin: 1.5em 0;
    background: #000;
    list-style: square;
    > li {
      margin: .5em 0;
    }
  }
`;
