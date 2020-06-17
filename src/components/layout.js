import React from 'react';
import PropTypes from 'prop-types';

import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';

import Header from './header';
import Footer from './footer';

import { fadeIn } from './animationStyles';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Header />
    <Main>
      <MainGrid>
        {children}
      </MainGrid>
    </Main>
    <Footer />
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

const Main = styled.main`
  padding: 1rem;
  opacity: 0;
  animation: .5s .1s ${fadeIn} ease-out forwards;
  @media (min-width: ${(props) => props.theme.mq.medium}) {
    padding: 2rem;
  }
`;

const MainGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2rem 1.5rem; 
  max-width: ${(props) => props.theme.mq.max};
  margin: 0 auto;
  line-height: 1.8;
  font-size: calc(.5em + .78vw);
  @media (min-width: ${(props) => props.theme.mq.large}) {
    font-size: 1rem;
  }
`;
