import Theme from '../../styles/theme';
import { Layout } from '../../layout/Layout';
import Footer from '../../components/Footer/Footer'
import Services from '../../components/Services/Services';

import React, { useState } from "react";
import ContactForm from '../../components/ContactForm/ContactForm.js'
import Modal from '../../components/ContactForm/Modal'
import { ChatButton , ContactButtonContainer } from '../../components/ContactForm/ContactButton';
import { SiGooglemessages } from "react-icons/si";

  export default function ServicePage ({ Component, pageProps }) {
    const [showModal, setShowModal] = useState(false);

    return (
      <>

<Theme>

<Layout>

<Services />


<ContactButtonContainer>

<ChatButton onClick={() => setShowModal(true)}> 
<SiGooglemessages size="5rem" />
</ChatButton>

</ContactButtonContainer>

<Modal
  onClose={() => setShowModal(false)}
  show={showModal}
>
<ContactForm/>

</Modal>  
        

<Footer/>

</Layout>
  
  
</Theme>
      </>
    );
  }
  
  