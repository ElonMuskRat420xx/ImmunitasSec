import React from 'react'
import styled from 'styled-components'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Image from 'next/image';
import Red1 from '../../../public/images/Redscan1.svg'
import ContactForm from './ContactForm';

function HeroGrid() {
  return (

<TopHeroContainer>
<TopHeroRowReverse>

<TopRightColumn>
<TopRightColContent>
<TopRightColImage>
<Image
      src={Red1}
      alt="Card Image"
      width="400px"
      height="400px"

    />
</TopRightColImage>
</TopRightColContent>
</TopRightColumn>


<TopLeftColumn>
<TopLeftColContent>
<ContactForm/>
</TopLeftColContent>
</TopLeftColumn>

</TopHeroRowReverse>
</TopHeroContainer>

    )
}

export default HeroGrid

const TopHeroContainer = styled.div`

display: flex;
-webkit-box-align: center;
align-items: center;
flex-direction: row-reverse;
padding-left: 2rem;
width: 100%;
height: 100%;
margin-top: -1px;
margin-bottom:4rem;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    
  }
`

const TopHeroRowReverse = styled.div`

display: flex;
    flex-direction: row-reverse;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    
  }
`
const TopRightColumn = styled.div`

padding: 0rem;
height: 100%;
width: 100%;
margin: 0px;
display: flex;
flex-direction: column;
-webkit-box-pack: center;
justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    
  }
`
const TopRightColContent = styled.div`

display: flex;
flex-direction: column;
-webkit-box-pack: center;
justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    
  }
`
const TopLeftColumn = styled.div`

padding-top: 2rem;
height: 100%;
width: 55%;
margin: 0px;
display: flex;
flex-direction: column;
-webkit-box-pack: center;
justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    
  }
`
const TopLeftColContent = styled.div`

display: flex;
flex-direction: column;
-webkit-box-pack: center;
justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
  }
`

const TopRightColImage = styled.div`
  align-self: center; /* prevents crop */
  width: 100%;
  max-width: ${(props) => `${props.maxImageWidth}px`};
  margin-top: 0rem;
  margin-bottom: 0rem;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-bottom: 0rem;
    margin-top: 0rem;
  }
`