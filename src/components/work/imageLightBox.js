/* eslint-disable prefer-destructuring */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import { fadeIn } from '../animationStyles';


// image / close window / prev/next ?

const ImageLightBox = ({
  closeLightBox, images, index, name,
}) => {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    setCurrentImage({ path: images[index].path, desc: images[index].desc, index: index + 1 });
    document.body.classList.add('noscroll');
    return function cleanup() {
      document.body.classList.remove('noscroll');
    };
  }, []);

  const changeImage = (direction) => {
    const imagesLength = images.length;
    const currentIndex = images.findIndex((image) => image.path === currentImage.path);

    let newImagePath = '';
    let newImageIndex = 0;

    if (direction === 'prev') {
      if (currentIndex > 0) { // decrement by 1
        newImagePath = images[currentIndex - 1];
        newImageIndex = currentIndex;
      } else { // at start... skip to last
        newImagePath = images[imagesLength - 1];
        newImageIndex = imagesLength;
      }
    } else if (direction === 'next') { // increment by 1
      if (currentIndex < imagesLength - 1) {
        newImagePath = images[currentIndex + 1];
        newImageIndex = currentIndex + 2;
      } else { // at end... skip to start
        newImagePath = images[0];
        newImageIndex = 1;
      }
    }
    setCurrentImage({ path: newImagePath.path, desc: newImagePath.desc, index: newImageIndex });
  };

  // check what we're clicking on before closing
  const closeLightbox = (e) => {
    e.preventDefault();
    if (e.target.attributes.getNamedItem('data-close')) { // check this data attr to avoid issues around event bubbling
      closeLightBox();
    }
  };

  return (
    <Outer onClick={(e) => closeLightbox(e)} data-close="true">
      <Close onClick={(e) => closeLightbox(e)} data-close="true">&times;</Close>
      <Inner>
        <Left onClick={() => changeImage('prev')}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 16"><path fillRule="evenodd" d="M8 14.8L1.2 8 8 1.2V0L0 8l8 8v-1.2z" /></svg>
        </Left>
        {currentImage && (
          <Image>
            <ImageDesc>{currentImage.desc}</ImageDesc>
            <picture>
              <source srcSet={currentImage.path.replace('.jpg', '.webp')} type="image/webp" />
              <img src={currentImage.path} alt={`${name} screenshot ${currentImage.index}`} />
            </picture>
            <ImageInfo className="reset-list">
              <li>{name}</li>
              <li>{`${currentImage.index}/${images.length}`}</li>
            </ImageInfo>
          </Image>
        )}
        <Right onClick={() => changeImage('next')}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 16"><path fillRule="evenodd" d="M0 14.8L6.8 8 0 1.2V0l8 8-8 8v-1.2z" /></svg>
        </Right>
      </Inner>
    </Outer>
  );
};

export default ImageLightBox;

ImageLightBox.propTypes = {
  closeLightBox: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const Outer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.9);
  opacity: 0;
  animation: .66s ${fadeIn} ease forwards;
  -webkit-user-select: none;       
  user-select: none;
  z-index: 3;
`;

const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  font-size: 4em;
  color: #fff;
  padding: .125em .5em;
  opacity: .15;
  font-weight: 300;
  line-height: 1;
  cursor: pointer;
  transition: opacity .33s ease, transform .33s ease;
  &:hover {
    opacity: .66;
    transform: scale(1.25);
  }
`;

const Inner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: #000;
  box-shadow: 0 0 2em rgba(0,0,0,1);
  img {
    max-width: 100vw;
    max-height: 80vh;
    opacity: 0;
    animation: .425s .33s ${fadeIn} ease forwards;
    @media (min-width: ${(props) => props.theme.mq.medium}) {
      max-width: 75vw;
      max-height: 80vh;
    }
    @media (min-width: ${(props) => props.theme.mq.xlarge}) {
      max-width: 85vw;
    }
  }
`;

const Image = styled.div`
  position: relative;
`;

const ImageDesc = styled.div`
  position: absolute;
  top: -2.25em;
  width: 100%;
  font-size: 1.125em;
  letter-spacing: .1em;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 0 #000;
`;


const ImageInfo = styled.ul`
  position: absolute;
  bottom: -2.25em;
  display: flex;
  width: 100%;
  padding: 0 1em;
  font-size: 1em;
  justify-content: space-between;
  opacity: .7;
  text-transform: uppercase;
  letter-spacing: .2em;
  font-weight: 700;
`;

const sharedChevronStyles = css`
  position: absolute;
  top: 0;
  width: 3em;
  height: 4em;
  transform: translateY(-110%);
  fill: #999;
  cursor: pointer;
  transition: fill .33s ease, transform .166s ease;
  padding: 1em;
  @media (min-width: ${(props) => props.theme.mq.medium}) {
    top: 50%;
    width: 3em;
    height: 4em;
    transform: translateY(-50%);
    width: 6em;
    height: 8em;
    padding: 2em;
  }
  &:hover {
    fill: #fff;
    transform: translateY(-50%) scale(1.2);
  }
`;

const Left = styled.div`
  left: 0;
  ${sharedChevronStyles}
  @media (min-width: ${(props) => props.theme.mq.medium}) {
    left: -6em;
  }
`;

const Right = styled.div`
  right: 0;
  ${sharedChevronStyles}
  @media (min-width: ${(props) => props.theme.mq.medium}) {
    right: -6em;
  }
`;
