import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import styled from 'styled-components';

const projects = [
  { name: 'Truly', link: '/work/truly/' },
  { name: 'Google VAS', link: '/work/google-vas/' },
  { name: 'Brandpath', link: '/work/brandpath/' },
  { name: 'Huawei', link: '/work/huawei/' },
  { name: 'Samsung', link: '/work/samsung/' },
  { name: 'Expansys', link: '/work/expansys/' },
];

const WorkFooter = ({ currentProject }) => {
  const [footerLinks, setFooterLinks] = useState(null);

  useEffect(() => {
    // dynamically set footer links based on current project name

    const projectsLength = projects.length - 1;
    const projectIndex = projects.findIndex((project) => project.name === currentProject);
    let prev = {};
    let next = {};

    // cycle round
    if (projectIndex < projectsLength) {
      next = projects[projectIndex + 1];
    } else {
      // eslint-disable-next-line prefer-destructuring
      next = projects[0];
    }

    if (projectIndex > 0) {
      prev = projects[projectIndex - 1];
    } else {
      prev = projects[projectsLength];
    }

    setFooterLinks({
      prev,
      next,
    });
  }, []);

  return (
    <Footer>
      {footerLinks && (
        <>
          <Link to={footerLinks.prev.link}>
            &lt;&nbsp;
            {footerLinks.prev.name}
          </Link>
          <Link to="/work/"><strong>Index</strong></Link>
          <Link to={footerLinks.next.link}>
            {footerLinks.next.name} 
            &nbsp;&gt;
          </Link>
        </>
      )}
    </Footer>
  )
};

export default WorkFooter;

WorkFooter.propTypes = {
  currentProject: PropTypes.string.isRequired,
};


const Footer = styled.div`
  grid-column: span 12;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  background-color: #000;
  background: linear-gradient(to right, #000 0, #090909 20%, #090909 80%,#000 100%);
  box-shadow: 0 -.75em 1em -1em rgba(0,0,0,1), 0 .75em 1em -1em rgba(0,0,0,1);
  a {
    display: inline-block;
    padding: .5em 1em;
    text-decoration: none;
    cursor: pointer;
    letter-spacing: .1em;
    transition: background-color .33s ease, color .33s ease;
    &:hover {
      background-color: #bbb;
      color: #000;
    }
  }
`;
