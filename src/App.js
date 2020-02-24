import React from "react";
import BaseLayout from "./components/BaseLayout";
import Banner from "./components/Banner";
import StickyDiv from "./components/StickyDiv";
import Logo from "./components/Logo";
import ContactForm from "./containers/ContactForm";
import ContactCard from "./containers/ContactCard";
import ModalSummary from "./containers/ModalSummary";
import RemoteSubmitButton from "./containers/RemoteSubmitButton";

export default function App() {
  return (
    <BaseLayout>
      <StickyDiv>
        <Logo />
        <Banner>
          <RemoteSubmitButton />
        </Banner>
      </StickyDiv>
      <ContactForm />
      <ContactCard />
      <ModalSummary />
    </BaseLayout>
  );
}
