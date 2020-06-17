
import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <SiteFooter>
    <ul className="reset-list">
      <li>
        built with
        {' '}
        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer noopener nofollow">Gatsby</a>
        {' '}
        using CSS Grid &amp; Styled Components / hosted on
        {' '}
        <a href="https://www.netlify.com/" target="_blank" rel="noreferrer noopener nofollow">Netlify</a>
      </li>
      <li>
        view source on
        {' '}
        <a href="https://github.com/kimlove/kiml.dev" target="_blank" rel="noreferrer noopener nofollow">
          GitHub
        </a>
      </li>
    </ul>
  </SiteFooter>
);

export default Footer;

const SiteFooter = styled.footer`
  padding: 1em 0 0;
  margin: 0 2rem;
  max-width: ${(props) => props.theme.mq.max};
  @media (min-width: ${(props) => props.theme.mq.max}) {
    margin: 0 auto;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: ${(props) => props.theme.mq.max};
    margin: 2em 0 1em;
    font-size: .875em;
    letter-spacing: .1em;
    border-top: 1px solid rgba(255,255,255,.075);
    padding: 1em .5em .5em;
    color: #888;
    text-align: center;
    li {
      margin: .5em;
    }
    @media (min-width: ${(props) => props.theme.mq.large}) {
      flex-direction: row;
      justify-content: space-between;
    }
    a {
      text-decoration: none;
      color: inherit;
      transition: color .33s ease, text-shadow .33s ease;
      font-weight: bold;
      &:hover {
        color: #ddd;
        text-shadow: 0 0 .5em rgba(255,255,255,.25);
      }
    }
  }
`;
