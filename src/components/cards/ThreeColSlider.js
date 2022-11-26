import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "../misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons";
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'



// ============== Pics ==============

import {m1, m2, m3, m4, m5, m6, m7, m8,m9,m10,m11,m12,m13,m14,m15} from '../../assets/index'

const Container = tw.div`relative bg-[#F1F9FF]`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex gap-2`}
  }
  .slick-slide {
    ${tw`h-auto flex items-center justify-center mb-1`}
  }
`;

export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: m1,
    },
    {
      imageSrc: m2,
    },
    {
      imageSrc: m3,
    },
    {
      imageSrc: m4,
    },
    {
      imageSrc: m5,
    },
    {
      imageSrc: m6,
    },
    {
      imageSrc: m7,
    },
    {
      imageSrc: m8,
    },
    {
      imageSrc: m9,
    },
    {
      imageSrc: m10,
    },
    {
      imageSrc: m11,
    },
    {
      imageSrc: m12,
    },
    {
      imageSrc: m13,
    },
    {
      imageSrc: m14,
    },
    {
      imageSrc: m15,
    },
  ]

  return (
    <Container id="memorias">
      <Content>
        <HeadingWithControl>
          <Heading >Memorias de Trabajo</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><FaArrowLeft/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><FaArrowRight/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            // <Card key={index}>
            //   <CardImage imageSrc={card.imageSrc} />
              
            // </Card>
            <div className="flex w-72 h-72 rounded items-center justify-center" key={index}>
              <img src={card.imageSrc} className="rounded"/>
            </div>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
