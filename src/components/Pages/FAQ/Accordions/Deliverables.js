import React, { useState } from 'react';
import { DeliverablesData } from '../Data/DataDeliverables';
import styled from 'styled-components';
import { IconContext } from 'react-icons';

import { FiPlus, FiMinus } from 'react-icons/fi';
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";




const Wrap = styled.div`

display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  justify-content: left;
  width: 100%;
  cursor: pointer;
  padding:0.25rem;  

  h1 {
    font-size: 2rem;
  }
  span {
    margin-right: 1em;
  }
`;


const DeliverableQuestions = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{
      color: '#BF5249', size: '1.5rem'
    }}>
      <DropDownBoxes>
        {DeliverablesData.map((value, index) => {
          return (
            <>
              <DropDownBox>
                <Wrap onClick={() => toggle(index)} key={index, value}>
                  <h1>{value.question}</h1>
                  <span className='self-center'>{clicked === index ? <FaMinusCircle /> : <FaPlusCircle />}</span>
                </Wrap>
                {clicked === index ? (
                  <DropDownBoxText>
                    <p className="pb-4">{value.answer_section1}</p>
                    <p className="pb-4">{value.answer_section2}</p>
                    <p className="pb-4">{value.answer_section3}</p>
                    <p className="pb-4">{value.answer_section4}</p>
                    <p className="">{value.answer_section5}</p>

                  </DropDownBoxText>
                ) : null}
              </DropDownBox>
            </>
          );
        })}
      </DropDownBoxes>
    </IconContext.Provider>
  );
};

export default DeliverableQuestions;




const DropDownBoxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: inherit;
  gap: 24px;
  margin: 20px 0 40px;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 10px 0 32px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: block;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 5px auto;
  }
`
const DropDownBox = styled.div`
  @media ${props => props.theme.breakpoints.lg} {
    height: 100%;

  }

  @media ${props => props.theme.breakpoints.md} {
    height: 100%;
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 100%px;
  
    &:nth-child(2n){
      grid-row:2;
    }
  }
`

const DropDownBoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 20px;
  };

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`