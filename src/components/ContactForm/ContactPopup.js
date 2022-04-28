import React from 'react'


import ContactForm from '../../components/ContactForm/ContactForm.js'
import Modal from '../../components/ContactForm/Modal'
import { ContactButton , ContactButtonContainer } from '../../components/ContactForm/ContactButton';
import { SiGooglemessages } from "react-icons/si";
import { Section } from '../../styles/GlobalComponents/index.js';

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
        <ContactForm/>

        </Modal>  
 </Section>
   


  )
}

export default ContactPopup