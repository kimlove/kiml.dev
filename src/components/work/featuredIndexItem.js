import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WorkItem = ({
  year,
  title,
  subtitle,
  skills,
  link,
  image,
}) => (
  <Container>
    <Link to={link}>
      <Info className="reset-list">
        <Year>{year}</Year>
        <Label>
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
        </Label>
        {skills && (
        <Skills>
          <ul className="reset-list">
            {skills.map((skill) => (
              <li key={skill}><span>{skill}</span></li>
            ))}
          </ul>
        </Skills>
        )}
      </Info>
      <Image>
        <picture>
          <source srcSet={image.replace('.jpg', '.webp')} type="image/webp" />
          <img src={image} alt={title} />
        </picture>
        <More className="more">More &gt;</More>
      </Image>
    </Link>
  </Container>
);

export default WorkItem;

WorkItem.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const More = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 1em;
  right: 1em;
  background: #fff;
  padding: .25em .75em;
  color: ${(props) => props.theme.colours.nearlyBlack};
  font-size: .875em;
  font-weight: bold;
  box-shadow: .33em .33em 0 rgba(0,0,0,.15);
  transition: opacity .33s ease, transform .33s ease;
  transform: scale(0);
`;

const Container = styled.div`
  position: relative;
  font-family: 'Source Sans Pro', sans-serif;
  width: 100%;
  > a {
    &:hover,&:active,&:focus {
      img {
        opacity: 1;
        filter: grayscale(0) invert(0) brightness(1);
        transform: scale(1.05);
      }
      ${More} {
        opacity: .9;
        transform: scale(1);
      }
    }
  }
`;

const Info = styled.ul`
  position: absolute;
  max-width: 80%;
  height: 100%;
  z-index: 2;
  > li {
    &:first-child {
      margin-top: 0;
    }
  }
`;

const Year = styled.li`
  font-weight: bold;
  margin-bottom: 1em;
`;

const Label = styled.li`
  position: relative;
  background: #fff;
  color: ${(props) => props.theme.colours.nearlyBlack};
  padding: .5em 1em;
  line-height: 1.3;
  box-shadow: .33em .33em 0 rgba(0,0,0,.35);
  margin: 1em 0;
  pointer-events: none;
  font-size: 1.25em;
  @media (min-width: ${(props) => props.theme.mq.medium}) {
    font-size: 1em;
  }
  h2,h4 {
    margin: 0;
  }
  h2 {
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }
  h4 {
    font-weight: 400;
  }
`;

const Skills = styled.li`
   font-size: 1.125em;
   opacity: .75;
   color: #bbb;
   @media (min-width: ${(props) => props.theme.mq.medium}) {
    font-size: .875em;
   }
   span {
     display: inline-block;
     padding-right: .75em;
     background: ${(props) => props.theme.colours.nearlyBlack};
   }
`;

const Image = styled.div`
  position:relative;
  margin-left: calc(25% + .475rem);
  width: calc(75% - .475rem);
  padding-top: calc(75% - .475rem);
  background: rgba(255,255,255,.05);
  img {
    position: absolute;
    top:0;
    opacity: .5;
    filter: grayscale(1) invert(.15) brightness(.9);
    opacity: .75;
    transition: opacity .33s ease, filter .33s ease, transform .33s ease;
    backface-visibility: hidden;
  }
`;
