/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import SlickSlider from "react-slick";
import styled from "styled-components";

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }

  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 50px;
  }
`;

const SliderComponent = styled(SlickSlider)`
  margin-bottom: 40px;
  .slick-arrow {
    &:before {
      color: ${(props) => props.categoryColor};
    }
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ children, categoryColor }) => (
  <Container>
    <SliderComponent
      categoryColor={categoryColor}
      {...{
        dots: false,
        infinite: false,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
      }}
    >
      {children}
    </SliderComponent>
  </Container>
);

export default Slider;
