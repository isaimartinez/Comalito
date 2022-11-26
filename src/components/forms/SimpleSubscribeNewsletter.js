import React from "react";
import tw from "twin.macro";
import {ReactComponent as EmailNewsletterIconBase } from "../../images/email-newsletter-icon.svg"
import {Container as ContainerBase } from "../misc/Layouts.js"
import {SectionHeading} from "../misc/Headings.js";


const Container = tw.div`flex relative bg-[#eeda86] -mx-8 `


const EmailNewsletterIcon = tw(EmailNewsletterIconBase)`flex w-16 h-16 m-auto text-primary-800`

const TwoColumn = tw.div`flex  w-full flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 lg:py-5`;

const TextColumn = tw.div`flex flex-col lg:w-full mt-16 md:mt-0 mx-auto`
const FormColumn = tw.div`flex items-center justify-center rounded h-[800]` 
const Info = tw.div`flex items-center justify-center`
const InfoText = tw.p`text-center text-gray-800`


export default () => {
  return (
    <Container id="contacto">
      {/* <Content> */}
        <TwoColumn>

          <TextColumn>
            <Info>
              <EmailNewsletterIcon />

            </Info>
            <Info>
              <InfoText>Estamos en la ciudad de Querétaro, Qro., México.</InfoText>
            </Info>
            <Info>
              <InfoText className="text-center text-gray-800">contacto@elcomalitocultural.org</InfoText>
            </Info>
            <Info>
              <InfoText className="text-center text-gray-800">(442) 5671010</InfoText>
            </Info>
          </TextColumn>
          <FormColumn className="lg:google-form">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdG1px0HbR_czZOf_b_q7wWBj0zYaiMnqlN3asbMYSEwfYH8Q/viewform?embedded=true" 
              width="640" 
              height="700" 
              frameBorder="0" marginHeight="0" marginWidth="0">Cargando…</iframe>
          </FormColumn>
        </TwoColumn>
      {/* </Content> */}
    </Container>
  );
};
