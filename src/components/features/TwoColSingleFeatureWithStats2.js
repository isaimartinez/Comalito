import React,{useState} from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings.js";
import {c1, c2, c3, c4 } from '../../assets/index'
import Slider from "react-slick";
const Container = tw.div`relative bg-[#F1F9FF]`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center justify-between max-w-screen-xl mx-auto py-10 lg:py-12`;
const TextColumn = tw.div`flex lg:w-auto justify-between max-w-screen-xl mx-auto py-5 lg:py-6  mt-16 md:mt-0 mx-auto`
const TextContent = tw.div`lg:py-8 text-center md:text-left`;


const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
// const Description = tw.p`mt-4 max-w-xl mx-auto text-center text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const Item = tw.div``

const CardSlider = styled(Slider)`
  ${tw`mt-10`}
  .slick-track { 
    ${tw`flex gap-2`}
  }
  .slick-slide {
    ${tw`h-auto flex items-center justify-center mb-1`}
  }
`;

export default ({
  subheading = "Our Track Record",
  heading = (
    <>
      We have been doing this <wbr /> since <span tw="text-primary-500">1999.</span>
    </>
  ),
  description = "Somos una red comunitaria que promueve el sano esparcimiento de niños y adolescentes para la generación de acentes de cambio a través de actividades culturales.",
  imageInsideDiv = true,
}) => {
  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    speed: 500,
    autoplaySpeed: 2500,
    swipeToSlide: true,
    cssEase: "linear"
  };

  
  return (
    <Container id="nosotros">
      <TextColumn>
        <TextContent>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </TextContent>
      </TextColumn>
      <div>
        <CardSlider {...sliderSettings}>
          <div>
              <img src={c1} />
          </div>
          <div>
              <img src={c2} />
          </div>
          <div>
              <img src={c3} />
          </div>
          <div>
              <img src={c4} />
          </div>
        </CardSlider>
      </div>
    </Container>
  );
};
