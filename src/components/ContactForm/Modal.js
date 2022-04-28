import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <a href="#" onClick={handleCloseClick}>
          
            <AiOutlineClose size="3rem" />


          </a>
        </StyledModalHeader>
        {title && <StyledModalTitle>{title}</StyledModalTitle>}
        <StyledModalBody>{children}</StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

const StyledModalBody = styled.div`
  padding-top: 10px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`
  background: #212D45;
  position: fixed;
  width: fit-content;
  height: fit-content;
  border-radius: 15px;
  padding: 15px;
  margin-top:5rem;
  margin-bottom:5rem;
  transform: scale(1);

  @media ${(props) => props.theme.breakpoints.lg} {
    transform: scale(0.6);
    }

    @media ${(props) => props.theme.breakpoints.xl} {
    transform: scale(0.7);
    }

    @media ${(props) => props.theme.breakpoints.sm} {
      transform: scale(0.8);
    left: 0rem;
    }

    @media ${(props) => props.theme.breakpoints.xs} {
    left: 0rem;
    }
`;

const StyledModalOverlay = styled.div`
  position: fixed;
  bottom: 0rem;
  left: 0rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  -webkit-backdrop-filter: none;
  backdrop-filter: none;
  -webkit-backdrop-filter: blur(7.5px);
  backdrop-filter: blur(7.5px);
  background-color: rgba(255, 255, 255, .01);  
  

  @media ${(props) => props.theme.breakpoints.md} {
    
  left: 0rem;
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    
  left: 0rem;
  }

  @media ${(props) => props.theme.breakpoints.xs} {
  left: 0rem;
  }
 
`;

export default Modal;