import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import ImageLightBox from './imageLightBox';

const WorkImages = ({ images, name }) => {
  const [showLightBox, setShowLightBox] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const toggleImageLightBox = (index) => {
    setShowLightBox(!showLightBox);
    setSelectedIndex(index);
  };

  return (
    <>
      <Images>
        <ul className="reset-list">
          {images && images.map((image, index) => (
            <li
              key={index.path}
            >
              <button type="button" onClick={() => toggleImageLightBox(index)}>
                <picture>
                  <source srcSet={image.path.replace('.jpg', '_thb.webp')} type="image/webp" />
                  <img src={image.path.replace('.jpg', '_thb.jpg')} title={`${name}: ${image.desc}`} alt={`${name}: ${image.desc}`} />
                </picture>
              </button>
            </li>
          ))}
        </ul>
      </Images>

      {showLightBox && (
        <ImageLightBox
          closeLightBox={toggleImageLightBox}
          images={images}
          index={selectedIndex}
          name={name}
        />
      )}
  
    </>
  );
};

export default WorkImages;

WorkImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
  name: PropTypes.string.isRequired,
};

const Images = styled.aside`
  grid-column: span 12;
  @media (min-width: ${(props) => props.theme.mq.large}) {
    grid-column: span 6;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3em 1.5em; 
  }
  li {
    position: relative;
    border: 1px solid rgba(255,255,255,.15);
    background: rgba(0,0,0,.33);

    > button {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      position: relative;
      backface-visibility: hidden;
      transition: opacity .4s ease, filter .4s ease, transform .4s ease;
      filter: grayscale(1) invert(.1) brightness(.9);
      opacity: .85;
      transform-origin: 10% 50%;
      transform: translateX(9%) scale(1.05) perspective(420px) rotateY(22.5deg);
      z-index: 1;
      img {
        border: 2px solid #000;
      }  
      &::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(to right, rgba(255,255,255,.2) 10%, transparent 40%, rgba(0,0,0,.7) 93%, rgba(0,0,0,.8) 100%);
        transition: opacity .3s .1s ease;
      }
      &:hover,&:focus {
        opacity: 1;
        filter: grayscale(0) invert(0) brightness(1);
        transform: scale(1.15);
        z-index: 2;
        &::after {
          opacity: 0;
        }    
      }
    }
  }
`;
