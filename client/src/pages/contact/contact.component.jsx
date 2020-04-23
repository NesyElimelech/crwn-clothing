import React from "react";
import ContactForm from "../../components/contatct-form/contact-form.component";
import { ContactPageContainer, ContactLabel } from "./contact.styles";

const ContactPage = () => (
  <ContactPageContainer>
    <ContactLabel>Contact us</ContactLabel>
    <ContactForm></ContactForm>
  </ContactPageContainer>
);

export default ContactPage;
