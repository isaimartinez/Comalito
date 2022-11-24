import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "../misc/Layouts.js"

import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import logo from '../../assets/logo.png'


const Container = tw(ContainerBase)`bg-primary-700 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-20`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>El Comalito</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="#">Home</Link>
            <Link href="#nosotros">Sobre Nosotros</Link>
            <Link href="#memorias">Memorias de Trabajo</Link>
            <Link href="#qa">Preguntas Frecuentes</Link>
            <Link href="#contacto">Contacto</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink target="_blank" href="https://www.facebook.com/elcomalito.cultural">
              <FaFacebook />
            </SocialLink>
            <SocialLink target="_blank" href="https://instagram.com/comalito.ac?igshid=YmMyMTA2M2Y=">
              <FaInstagram />
            </SocialLink>
            <SocialLink target="_blank" href="https://www.linkedin.com/in/el-comalito-comunidad-cultural-0456a1250/">
              <FaLinkedin />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2022, El Comalito espacio cultural comunitario
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
