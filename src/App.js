import React from "react";
import Banner from "./containers/Banner";
import BaseLayout from "./components/BaseLayout";
import ContactForm from "./containers/ContactForm";
import ContactCard from "./containers/ContactCard";
import Container, { HalfContainer } from "./components/Container";
import Logo from "./components/Logo";
import ModalSummary from "./containers/ModalSummary";
import StickyDiv from "./components/StickyDiv";

export default function App() {
  return (
    <BaseLayout>
      <StickyDiv>
        <Logo />
        <Banner />
      </StickyDiv>
      <Container>
        <HalfContainer>
          <ContactForm />
        </HalfContainer>
        <HalfContainer>
          <ContactCard />
        </HalfContainer>
      </Container>
      <ModalSummary />
    </BaseLayout>
  );
}
