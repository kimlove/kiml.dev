import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MediumTitle = ({
  titleText,
  type,
}) => (
  <Title type={type}>
    {titleText}
  </Title>
);

export default MediumTitle;

MediumTitle.propTypes = {
  titleText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const Title = styled.h2`
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: .2em;
  font-size: 2.25em;
  margin: 0;
  color: #aaa;
  text-align: center;
`;
