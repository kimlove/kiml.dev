import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const WorkTitle = ({
  title,
  year,
  extLink,
}) => (
  <Title>
    <h2>{title}</h2>
    <Year>{year}</Year>
    {(extLink && extLink !== 'private') && (
      <ExtLink>
        <a href={extLink} target="_blank" rel="noreferrer noindex noopener">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 18a8 8 0 01-6.8-9.8L9 15v1c0 1.1.9 2 2 2v2zm6.9-2.6A2 2 0 0016 16h-1v-3c0-.6-.5-1-1-1H8v-2h2c.6 0 1-.5 1-1V7h2a2 2 0 002-2v-.4a8 8 0 012.9 12.8z"/>
          </svg>
          {extLink.replace('https://www.', '').replace('/', '')}
        </a>
      </ExtLink>
    )}
    {(extLink && extLink === 'private') && (
      <Offline>internal</Offline>
    )}
    {!extLink && (
      <Offline>offline</Offline>
    )}
  </Title>
);

export default WorkTitle;

WorkTitle.defaultProps = {
  extLink: '',
};

WorkTitle.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  extLink: PropTypes.string,
};

const Title = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  margin-bottom: 2em;
  font-family: 'Source Sans Pro', sans-serif;
  line-height: 1.1;
  h2 {
    grid-row: span 2;
    font-size: 3.25em;
    font-weight: 300;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: .2em;
    margin: 0;
  }
  p {
    margin: 0;
    text-align: right;
  }
`;

const Year = styled.p`
  font-weight: bold;
`;

const ExtLink = styled.p`
  font-size: 1.125em;
  letter-spacing: .1em;
  a {
    text-decoration: none;
    opacity: .7;
      transition: opacity .33s ease;
    svg {
      display: inline-block;
      vertical-align: middle;
      width: 1em;
      height: 1em;
      margin: 0 .33em 1px 0;
      fill: #fff;
      opacity: .8;
    }
    &:hover {
      text-decoration: underline;
      opacity: 1;
      svg {
        opacity: 1;
      }
    }
  }
  
`;

const Offline = styled.p`
  font-size: 1.125em;
  letter-spacing: .3em;
  font-weight: 300;
  opacity: .5;
`;
