import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Hero from "../components/hero/BackgroundAsImageWithCenteredContent.js";
import MVV from "../components/features/ThreeColSimple.js";
import Nosotros from "../components/features/TwoColSingleFeatureWithStats2.js";
import Memorias from "../components/cards/ThreeColSlider.js";
import FAQ from "../components/faqs/SimpleWithSideImage.js";
import Contacto from "../components/forms/SimpleSubscribeNewsletter.js";
import Footer from "../components/footers/MiniCenteredFooter.js";

import GlobalStyles from '../styles/GlobalStyles';

// =============== PICS ===============
import nosotros from '../assets/nosotros.jpeg'
import {FaBullseye, FaGem, FaEye} from 'react-icons/fa'


export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-[#FBF9BB] px-4 transform -skew-x-12 inline-block`;
  const imageCss = tw`rounded-4xl`;

  return (
  <>
    <GlobalStyles />
    <AnimationRevealPage>
      <Hero />
      <Nosotros
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
      <MVV
        heading={
          <>
            Misión, Visión y <HighlightedText>Valores</HighlightedText>
          </>
        }
        cards={[
          {
            icon: <FaBullseye size={40} color="#6898C3"/>,
            title: "Misión",
            description: "Hacer una oferta cultural de calidad gratuita que permita a niños y jovenes desarrollarse como agentes de cambio.",
            url: ""
          },
          {
            icon: <FaEye size={40} color="#6898C3"/>,
            title: "Visión",
            description: "Realizar un aporte relecante para el desarrollo humano de infancias en Querétaro.",
            url: ""
          },
          {
            icon: <FaGem size={40} color="#6898C3"/>,
            title: "Valores",
            description: "Nuestros pilares son trabajo en equipo, responsabilidad y justicia social desde una perspectiva sustentable.",
            url: ""
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <Memorias />
      <FAQ />
      <Contacto />
      <Footer />
    </AnimationRevealPage>
  </>
)}
