import React from 'react'


import ContactForm from './ContactForm'
import Modal from './Modal'
import { ContactButton, ContactButtonContainer } from './ContactButton';
import { SiGooglemessages } from "react-icons/si";
import { Section } from '../../../styles/GlobalComponents/index.js';

function ContactPopup() {
  return (


    <Section>
      <ContactButtonContainer>
        <ContactButton>
          <button onClick={() => setShowModal(true)}>
            <SiGooglemessages size="4rem" />
          </button>
        </ContactButton>
      </ContactButtonContainer>

      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
      >
        <ContactForm />

      </Modal>
    </Section>



  )
}

export default ContactPopup