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
  const [imgStatus, setImgStatus] = useState({ loading: false });

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

    setImgStatus({ loading: true });

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

  const imgLoaded = () => {
    setImgStatus({ loading: false });
  };

  return (
    <Outer onClick={(e) => closeLightbox(e)} data-close="true">
      <Close onClick={(e) => closeLightbox(e)} data-close="true">&times;</Close>
      <Inner>
        <Left onClick={() => changeImage('prev')} isLoading={imgStatus.loading}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 16"><path fillRule="evenodd" d="M8 14.8L1.2 8 8 1.2V0L0 8l8 8v-1.2z" /></svg>
        </Left>
        {currentImage && (
          <Image>
            {/* temp loader */}
            {imgStatus.loading && (
              <LoadingSpinner alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHdpZHRoPSI0MHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCA0MCA0MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEuNDE0MjE7IiB4PSIwcHgiIHk9IjBweCI+CiAgICA8ZGVmcz4KICAgICAgICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWwogICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7CiAgICAgICAgICAgICAgZnJvbSB7CiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpCiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHRvIHsKICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTM1OWRlZykKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgQGtleWZyYW1lcyBzcGluIHsKICAgICAgICAgICAgICBmcm9tIHsKICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpCiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHRvIHsKICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNTlkZWcpCiAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgICAgIHN2ZyB7CiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7CiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAxLjVzIGxpbmVhciBpbmZpbml0ZTsKICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOwogICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzcGluIDEuNXMgbGluZWFyIGluZmluaXRlOwogICAgICAgICAgICB9CiAgICAgICAgXV0+PC9zdHlsZT4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJvdXRlciI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMCwwQzIyLjIwNTgsMCAyMy45OTM5LDEuNzg4MTMgMjMuOTkzOSwzLjk5MzlDMjMuOTkzOSw2LjE5OTY4IDIyLjIwNTgsNy45ODc4MSAyMCw3Ljk4NzgxQzE3Ljc5NDIsNy45ODc4MSAxNi4wMDYxLDYuMTk5NjggMTYuMDA2MSwzLjk5MzlDMTYuMDA2MSwxLjc4ODEzIDE3Ljc5NDIsMCAyMCwwWiIgc3R5bGU9ImZpbGw6YmxhY2s7Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxnPgogICAgICAgICAgICA8cGF0aCBkPSJNNS44NTc4Niw1Ljg1Nzg2QzcuNDE3NTgsNC4yOTgxNSA5Ljk0NjM4LDQuMjk4MTUgMTEuNTA2MSw1Ljg1Nzg2QzEzLjA2NTgsNy40MTc1OCAxMy4wNjU4LDkuOTQ2MzggMTEuNTA2MSwxMS41MDYxQzkuOTQ2MzgsMTMuMDY1OCA3LjQxNzU4LDEzLjA2NTggNS44NTc4NiwxMS41MDYxQzQuMjk4MTUsOS45NDYzOCA0LjI5ODE1LDcuNDE3NTggNS44NTc4Niw1Ljg1Nzg2WiIgc3R5bGU9ImZpbGw6cmdiKDIxMCwyMTAsMjEwKTsiLz4KICAgICAgICA8L2c+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMCwzMi4wMTIyQzIyLjIwNTgsMzIuMDEyMiAyMy45OTM5LDMzLjgwMDMgMjMuOTkzOSwzNi4wMDYxQzIzLjk5MzksMzguMjExOSAyMi4yMDU4LDQwIDIwLDQwQzE3Ljc5NDIsNDAgMTYuMDA2MSwzOC4yMTE5IDE2LjAwNjEsMzYuMDA2MUMxNi4wMDYxLDMzLjgwMDMgMTcuNzk0MiwzMi4wMTIyIDIwLDMyLjAxMjJaIiBzdHlsZT0iZmlsbDpyZ2IoMTMwLDEzMCwxMzApOyIvPgogICAgICAgIDwvZz4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHBhdGggZD0iTTI4LjQ5MzksMjguNDkzOUMzMC4wNTM2LDI2LjkzNDIgMzIuNTgyNCwyNi45MzQyIDM0LjE0MjEsMjguNDkzOUMzNS43MDE5LDMwLjA1MzYgMzUuNzAxOSwzMi41ODI0IDM0LjE0MjEsMzQuMTQyMUMzMi41ODI0LDM1LjcwMTkgMzAuMDUzNiwzNS43MDE5IDI4LjQ5MzksMzQuMTQyMUMyNi45MzQyLDMyLjU4MjQgMjYuOTM0MiwzMC4wNTM2IDI4LjQ5MzksMjguNDkzOVoiIHN0eWxlPSJmaWxsOnJnYigxMDEsMTAxLDEwMSk7Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxnPgogICAgICAgICAgICA8cGF0aCBkPSJNMy45OTM5LDE2LjAwNjFDNi4xOTk2OCwxNi4wMDYxIDcuOTg3ODEsMTcuNzk0MiA3Ljk4NzgxLDIwQzcuOTg3ODEsMjIuMjA1OCA2LjE5OTY4LDIzLjk5MzkgMy45OTM5LDIzLjk5MzlDMS43ODgxMywyMy45OTM5IDAsMjIuMjA1OCAwLDIwQzAsMTcuNzk0MiAxLjc4ODEzLDE2LjAwNjEgMy45OTM5LDE2LjAwNjFaIiBzdHlsZT0iZmlsbDpyZ2IoMTg3LDE4NywxODcpOyIvPgogICAgICAgIDwvZz4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHBhdGggZD0iTTUuODU3ODYsMjguNDkzOUM3LjQxNzU4LDI2LjkzNDIgOS45NDYzOCwyNi45MzQyIDExLjUwNjEsMjguNDkzOUMxMy4wNjU4LDMwLjA1MzYgMTMuMDY1OCwzMi41ODI0IDExLjUwNjEsMzQuMTQyMUM5Ljk0NjM4LDM1LjcwMTkgNy40MTc1OCwzNS43MDE5IDUuODU3ODYsMzQuMTQyMUM0LjI5ODE1LDMyLjU4MjQgNC4yOTgxNSwzMC4wNTM2IDUuODU3ODYsMjguNDkzOVoiIHN0eWxlPSJmaWxsOnJnYigxNjQsMTY0LDE2NCk7Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxnPgogICAgICAgICAgICA8cGF0aCBkPSJNMzYuMDA2MSwxNi4wMDYxQzM4LjIxMTksMTYuMDA2MSA0MCwxNy43OTQyIDQwLDIwQzQwLDIyLjIwNTggMzguMjExOSwyMy45OTM5IDM2LjAwNjEsMjMuOTkzOUMzMy44MDAzLDIzLjk5MzkgMzIuMDEyMiwyMi4yMDU4IDMyLjAxMjIsMjBDMzIuMDEyMiwxNy43OTQyIDMzLjgwMDMsMTYuMDA2MSAzNi4wMDYxLDE2LjAwNjFaIiBzdHlsZT0iZmlsbDpyZ2IoNzQsNzQsNzQpOyIvPgogICAgICAgIDwvZz4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHBhdGggZD0iTTI4LjQ5MzksNS44NTc4NkMzMC4wNTM2LDQuMjk4MTUgMzIuNTgyNCw0LjI5ODE1IDM0LjE0MjEsNS44NTc4NkMzNS43MDE5LDcuNDE3NTggMzUuNzAxOSw5Ljk0NjM4IDM0LjE0MjEsMTEuNTA2MUMzMi41ODI0LDEzLjA2NTggMzAuMDUzNiwxMy4wNjU4IDI4LjQ5MzksMTEuNTA2MUMyNi45MzQyLDkuOTQ2MzggMjYuOTM0Miw3LjQxNzU4IDI4LjQ5MzksNS44NTc4NloiIHN0eWxlPSJmaWxsOnJnYig1MCw1MCw1MCk7Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" />
            )}
            <ImageDesc>{currentImage.desc}</ImageDesc>
            <Picture isLoading={imgStatus.loading}>
              <source srcSet={currentImage.path.replace('.jpg', '.webp')} type="image/webp" />
              <img src={currentImage.path} alt={`${name} screenshot ${currentImage.index}`} onLoad={() => imgLoaded()} />
            </Picture>
            <ImageInfo className="reset-list">
              <li>{name}</li>
              <li>{`${currentImage.index}/${images.length}`}</li>
            </ImageInfo>
          </Image>
        )}
        <Right onClick={() => changeImage('next')} isLoading={imgStatus.loading}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 16"><path fillRule="evenodd" d="M0 14.8L6.8 8 0 1.2V0l8 8-8 8v-1.2z" /></svg>
        </Right>
      </Inner>
    </Outer>
  );
};

export default ImageLightBox;

ImageLightBox.propTypes = {
  closeLightBox: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
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

const Picture = styled.picture`
  transition: filter .2s ease, opacity .2s ease;
  opacity: ${(props) => (props.isLoading ? '.4' : '1')};
  filter: blur(${(props) => (props.isLoading ? '.25em' : '0')}) grayscale(${(props) => (props.isLoading ? '1' : '0')});;
`;

const LoadingSpinner = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  filter: opacity(.3);
  transform: translate(-50%,-50%);
  transform: scale(2);
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
  transition: fill .33s ease, transform .166s ease, opacity .33s ease;
  padding: 1em;
  opacity: ${(props) => (props.isLoading ? '.3' : '1')};
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
