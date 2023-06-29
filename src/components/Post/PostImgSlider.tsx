import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

import baseURL from '../../api/basURL';

const sliderSettings = {
  arrows: false,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface PostImgSliderProps {
  images: string[] | undefined;
}

export default function PostImgSlider({ images }: PostImgSliderProps) {
  return (
    <PostImgSliderLayout isExist={images ? images.length > 0 : false}>
      <Slider {...sliderSettings}>
        {images &&
          images.map((item) => <Image src={baseURL + '/image/' + item} />)}
      </Slider>
    </PostImgSliderLayout>
  );
}

const PostImgSliderLayout = styled.div<{ isExist: boolean }>`
  width: 100vw;
  height: 100vw;
  background-color: ${(props) => (props.isExist ? null : '#d9d9d9')};
  & .slick-dots {
    padding-bottom: 35px;
    .slick-active {
      button::before {
        color: #8f00ff;
      }
    }
    button::before {
      color: #d9d9d9;
    }
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100vw;
  height: 100vw;
`;
