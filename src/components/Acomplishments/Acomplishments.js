import React from 'react';
import styled from 'styled-components';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { AiFillHome } from 'react-icons/ai';

const data = [
  { title: 'text', text: 'text', icon:<AiFillHome size="2rem"/>},
  { title: 'text', text: 'text', icon:<AiFillHome size="2rem"/> },
  { title: 'text', text: 'text', icon:<AiFillHome size="2rem"/> },
  { title: 'text', text: 'text', icon:<AiFillHome size="2rem"/> }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Resolve Your Security Challenges</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxIcon>{card.icon}</BoxIcon>
          <BoxNum>{`${card.title}  `} </BoxNum>
          <BoxText> {card.text} </BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;


const BoxIcon = styled.div`
margin-inline:5%;

  @media ${props => props.theme.breakpoints.md} {
    
  }
  @media ${props => props.theme.breakpoints.sm} {
    
}
`