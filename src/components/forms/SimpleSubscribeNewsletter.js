import React from "react";
import tw from "twin.macro";
import {ReactComponent as EmailNewsletterIconBase } from "../../images/email-newsletter-icon.svg"
import {Container as ContainerBase } from "../misc/Layouts.js"
import {SectionHeading} from "../misc/Headings.js";


const Container = tw(ContainerBase)`flex bg-[#eeda86] -mx-8`
const Content = tw.div`flex flex-row max-w-screen-xl mx-auto py-20 lg:py-24`;


const EmailNewsletterIcon = tw(EmailNewsletterIconBase)`flex w-16 h-16 m-auto text-primary-800`
const HeadingInfoContainer = tw.div`sm:ml-6 mt-6 sm:mt-0`
const Heading = tw(SectionHeading)`text-gray-100 sm:text-left leading-none`



export default () => {
  return (
    <Container id="contacto">
      <Content>
          <div className="mt-12 ml-5 lg:mt-10 flex flex-col gap-5 lg:ml-16 w-full sm:w-auto text-white">
            <div className="flex justify-center items-center align-middle m-auto" style={{marginRight: 10}}>
              <EmailNewsletterIcon />
              <br />
            </div>
            <div className="flex items-center justify-center">
              <p className="text-center text-gray-400 font-medium text-sm max-w-sm mt-2 sm:mt-1 sm:text-left" style={{fontSize: 25}}>Estamos en la ciudad de Querétaro, Qro., México.</p>
              <br/>
            </div>
            <div className="flex items-center justify-center mt-10 ">
              <p className="text-center text-gray-800" style={{fontSize: 23}}>contacto@elcomalitocultural.org</p>
              <br/>
            </div>
            <div className="flex items-center justify-center mt-10 ">
              <p className="text-center text-gray-800" style={{fontSize: 23}}>(442) 5671010</p>
              <br/>
            </div>
          </div>
          <div className="flex" style={{backgroundColor: "white", borderRadius: 3}}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdG1px0HbR_czZOf_b_q7wWBj0zYaiMnqlN3asbMYSEwfYH8Q/viewform?embedded=true" width="640" height="700" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
          </div>
      </Content>
    </Container>
  );
};
