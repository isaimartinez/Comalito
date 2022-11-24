import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "../misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";



// ============== Pics ==============

import m1 from '../../assets/mem-1.jpeg'
import m2 from '../../assets/mem-2.jpeg'
import m3 from '../../assets/mem-3.jpeg'
import m4 from '../../assets/mem-4.jpeg'
import m5 from '../../assets/mem-5.jpeg'
import m6 from '../../assets/mem-6.jpeg'
import m7 from '../../assets/mem-7.jpeg'
import m8 from '../../assets/mem-8.jpeg'
import m9 from '../../assets/mem-9.jpeg'
import m10 from '../../assets/mem-10.jpeg'
import m11 from '../../assets/mem-11.jpeg'
import m12 from '../../assets/mem-12.jpeg'
import m13 from '../../assets/mem-13.jpeg'
import m14 from '../../assets/mem-14.jpeg'
import m15 from '../../assets/mem-15.jpeg'

const Container = tw.div`relative`;
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
const Card = tw.div`h-96 flex! flex-col sm:border sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-80 h-96 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
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
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
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
