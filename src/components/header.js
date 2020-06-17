import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { fadeIn } from './animationStyles';

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const hideMobileNav = () => {
    setShowMobileNav(false);
  };

  return (
    <SiteHeader>
      <SiteHeaderGrid>
        <Logo>
          <Link to="/" onClick={() => hideMobileNav()}>Kim Love</Link>
        </Logo>
        <NavIcon onClick={() => toggleMobileNav()}>
          {!showMobileNav && (
            <svg viewBox="0 0 24 24">
              <path d="M3,18h18v-2H3V18z M3,13h18v-2H3V13z M3,6v2h18V6H3z" />
            </svg>
          )}
          {showMobileNav && (
            <svg viewBox="0 0 24 24">
              <path d="M19 6.4l-1.4-1.4-5.6 5.6-5.6-5.6-1.4 1.4 5.6 5.6-5.6 5.6 1.4 1.4 5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z" />
            </svg>
          )}
        </NavIcon>
        <Nav displayNavOnMobile={showMobileNav}>
          <ul className="reset-list">
            <li>
              <Link
                onClick={() => hideMobileNav()}
                to="/about/"
                activeClassName="active"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/work/"
                activeClassName="active"
                partiallyActive
                onClick={() => hideMobileNav()}
              >
                Work
              </Link>
            </li>

            <li>
              <Link
                to="/contact/"
                activeClassName="active"
                onClick={() => hideMobileNav()}
              >
                Contact
              </Link>
            </li>
          </ul>
        </Nav>
      </SiteHeaderGrid>

    </SiteHeader>
  );
};

export default Header;

const SiteHeader = styled.header`
  position: relative;
  background-color: #fff;
  color: ${(props) => props.theme.colours.nearlyBlack};
  padding: 1rem;
  font-family: 'Merriweather', serif;
  //border-top: .25em solid #000;
  @media (min-width: ${(props) => props.theme.mq.medium}) {
    padding: 2rem;
  }
  a {
    color: currentColor;
    text-decoration: none;
  }
`;

const SiteHeaderGrid = styled.div`
    font-size: calc(.75em + 1.175vw);
    @media (min-width: ${(props) => props.theme.mq.medium}) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: ${(props) => props.theme.mq.max};
      margin: 0 auto;
      font-size: 1.5em;
    }
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
`;

const NavIcon = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  fill: #000;
  transform: translateY(-50%);
  line-height: 0;
  padding: 1em 1.5em;
  background: none;
  border: none;
  @media (min-width: ${(props) => props.theme.mq.medium}) {
    display: none;
  }
  svg {
    width: 36px;
    height: 36px;
    opacity: 0;
    animation: .33s ${fadeIn} ease-out forwards;
  }
`;

const Nav = styled.nav`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  background: #e4e4e4;
  //
  z-index: 2;
  padding: .75em;
  font-size: 1.5em;
  box-shadow: inset 0 1em .5em -1em rgba(0,0,0,.2);
  transition: transform .33s ease; 
  transform: translateX(${(props) => (props.displayNavOnMobile ? '0' : '-100%')});
  display: ${(props) => (props.displayNavOnMobile ? 'block' : 'none')};
  > ul {
    font-weight: 300;
    > li {
      > a {
        display: block;
        text-transform: lowercase;
        padding: .5em 1em;
        &.active {
          padding-left: .75em;
          border-left: .25em solid currentColor;
          background-image: linear-gradient(to right, rgba(255,255,255,.5) 0, transparent 100%);
        }
      }
    }
  }
  @media (min-width: ${(props) => props.theme.mq.medium}) {
    position: static;
    display: block;
    width: auto;
    background: transparent;
    font-size: 1em;
    padding: 0;
    box-shadow: none;
    transition: unset;
    transform: translateX(0);
    > ul {
      display: flex;

      > li {
        margin-left: 1.5em;
        &:first-child {
          margin-left: 0;
        }
        > a {
          padding: .25em 0;
          box-shadow: 0 .25em .3em -.3em transparent;
          transition: box-shadow .66s ease;
          &:hover,&.active {
            padding: .25em 0;
            box-shadow: 0 .166em 0 currentColor;
            border: none;
            background: none;
          }
        }
      }
    }
  }
`;
