import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
// import Hero from "../components/hero/FullWidthWithImage.js";
import Hero2 from "../components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "../components/features/ThreeColSimple.js";
import MainFeature2 from "../components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature from "../components/features/TwoColSingleFeatureWithStats.js";
// import SliderCard from "../components/cards/ThreeColSlider.js";
// import TrendingCard from "../components/cards/TwoTrendingPreviewCardsWithImage.js";
// import Blog from "../components/blogs/PopularAndRecentBlogPosts.js";
// import Testimonial from "../components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "../components/faqs/SimpleWithSideImage.js";
// import SubscribeNewsLetterForm from "../components/forms/SimpleSubscribeNewsletter.js";
import Footer from "../components/footers/MiniCenteredFooter.js";

import GlobalStyles from '../styles/GlobalStyles';

import chefIconImageSrc from "../images/chef-icon.svg";
import celebrationIconImageSrc from "../images/celebration-icon.svg";
import shopIconImageSrc from "../images/shop-icon.svg";


// =============== PICS ===============
import nosotros from '../assets/nosotros.jpeg'
import {FaBullseye, FaGem, FaEye} from 'react-icons/fa'


export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;

  return (
  <>
    <GlobalStyles />
    <AnimationRevealPage>
      <Hero2 />
      <MainFeature2
        subheading={<Subheading>Sobre Nosotros</Subheading>}
        heading={<>¿Quienes <HighlightedText>Somos?</HighlightedText></>}
        imageInsideDiv={false}
        imageSrc={nosotros}
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <Features
        heading={
          <>
            Misión, Visión y <HighlightedText>Valores</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            icon: <FaBullseye size={40}/>,
            title: "Misión",
            description: "Hacer una oferta cultural de calidad gratuita que permita a niños y jovenes desarrollarse como agentes de cambio.",
            url: ""
          },
          {
            imageSrc: chefIconImageSrc,
            icon: <FaEye size={40}/>,
            title: "Visión",
            description: "Realizar un aporte relecante para el desarrollo humano de infancias en Querétaro.",
            url: ""
          },
          {
            imageSrc: celebrationIconImageSrc,
            icon: <FaGem size={40}/>,
            title: "Valores",
            description: "Nuestros pilares son trabajo en equipo, responsabilidad y justicia social desde una perspectiva sustentable.",
            url: ""
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      {/* <SliderCard /> */}
      {/* <TrendingCard /> */}
      {/* <MainFeature /> */}
      {/* <Blog /> */}
      {/* <Testimonial textOnLeft={true}/> */}
      <FAQ />
      {/* <SubscribeNewsLetterForm /> */}
      <Footer />
    </AnimationRevealPage>
  </>
)}
