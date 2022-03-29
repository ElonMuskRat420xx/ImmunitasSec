import React, { useState, useRef, useEffect } from 'react';
import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from '../TimeLine/TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { StepHeading } from '../../constants/NetworkSecConstants';
import styled from 'styled-components'

const data = [
    { text1: '.01 Scoping', text2: 'Redscan’s network and infrastructure testing experts work with you to define any networks and assets in scope and devise an appropriate assessment strategy.'},
    { text1: '.02 Reconnaissance & Intelligence Gathering ', text2: 'Our network penetration testers use the latest intelligence gathering techniques to uncover security and technical information that could be used to help them access your network.', },
    { text1: '.03 Active Scanning & Vulnerability Analaysis', text2: 'Using a combination of manual and automated tools, out testers identify security weaknesses and develop a strategy to exploit them.', },
    { text1: '.04 Explotation', text2: 'To obtain initial access to your network, our experienced network penetration testers exploit all identified vulnerabilities, but in a safe way that avoids damage and disruption.', },
    { text1: '.05 Reporting', text2: 'Once a network assessment is complete, our testers document key findings and supply prioritised remediation guidance to help address any identified exposures.', },

  ];

const TOTAL_CAROUSEL_COUNT = StepHeading.length;

const TestingApproach = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / StepHeading.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * StepHeading.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (


    <Section>
      
      <ApproachTitle>Our Approach To Network Testing
      </ApproachTitle>

      <SectionText>
      An Immunitas network test follows a tried and tested methodology to identify, exploit and help address vulnerabilities. Here’s how we approach an external network assessment:
      </SectionText>
   


      <ApproachBoxes>
      {data.map((card, index) => (
        <ApproachBox key={index}>
          <ApproachBoxNum>{`${card.text1}`}</ApproachBoxNum>
          <ApproachBoxText>{card.text2}</ApproachBoxText>
        </ApproachBox>
      ))}
    </ApproachBoxes>



   </Section>

    
  );
};

export default TestingApproach;



//Title Styled Components
  
const PageTitle = styled.h2`
font-weight: 800;
font-size: ${(props) => props.main ? '65px' : '56px'};
line-height: ${(props) => props.main ? '72px' : '56px'};
width: max-content;
max-width: 100%;

margin-bottom: 16px;
padding: ${(props) => props.main ? '58px 0 16px' : '0'};

@media ${props => props.theme.breakpoints.md}{
  font-size: ${(props) => props.main ? '56px' : '48px'};
  line-height: ${(props) => props.main ? '56px' : '48px'};
  margin-bottom: 12px;
  padding: ${(props) => props.main ? '40px 0 12px' : '0'};
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 32px;
  line-height: 40px;
  font-size: ${(props) => props.main ? '28px' : '32px'};
  line-height: ${(props) => props.main ? '32px' : '40px'};
  margin-bottom: 8px;
  padding: ${(props) => props.main ? '16px 0 8px' : '0'};
  max-width: 100%;
}

`


const ApproachTitle = styled.h2`
font-weight: 800;
font-size: ${(props) => props.main ? '55px' : '46px'};
width: max-content;
max-width: 100%;
margin-top:2rem;
margin-bottom:4rem;
margin-left:20%;

@media ${props => props.theme.breakpoints.md}{
  line-height: ${(props) => props.main ? '56px' : '48px'};
  font-size:32px;
  margin-left:10%;

}
@media ${props => props.theme.breakpoints.sm}{
  font-size: 24px;
  line-height: 40px;
  max-width: 100%;
  margin-left:0%;
  padding-top:1.25rem;
  
}
`


const PageSubTitle = styled.h2`
font-weight: 800;
font-size: ${(props) => props.main ? '42px' : '24px'};
line-height: ${(props) => props.main ? '32px' : '32px'};
width: max-content;
max-width: 100%;

margin-bottom: 2rem;
padding: ${(props) => props.main ? '58px 0 16px' : '0'};

@media ${props => props.theme.breakpoints.md}{
  font-size: ${(props) => props.main ? '24px' : '18px'};
  line-height: ${(props) => props.main ? '32px' : '32px'};
  margin-bottom: 12px;
  padding: ${(props) => props.main ? '40px 0 12px' : '0'};
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 24px;
  line-height: 40px;
  font-size: ${(props) => props.main ? '28px' : '24px'};
  line-height: ${(props) => props.main ? '32px' : '32px'};
  margin-bottom: 8px;
  padding: ${(props) => props.main ? '16px 0 8px' : '0'};
  max-width: 100%;
}
`


//Methodology Section Styled Components

const ApproachBoxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
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

const ApproachBox = styled.div`
  background: #212D45;
  border-radius: 12px;
  height: 100%;
  padding: 24px;
  @media ${props => props.theme.breakpoints.lg} {
    height: 100%;

  }

  @media ${props => props.theme.breakpoints.md} {
    height: 100%;
    padding: 16px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 100%px;
    padding: 12px;
    margin-top:10px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
`
const ApproachBoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
}
`

const ApproachBoxText = styled.p`
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

const ApproachJoin = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`

const ApproachJoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

@media ${props => props.theme.breakpoints.md}{
  line-height: 32px;
  font-size: 20px;
};

@media ${props => props.theme.breakpoints.sm}{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
}
`

export const IconContainer = styled.div`
  display: flex;

  @media ${props => props.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`

const ApproachBox2 = styled.div`
  
  height: 200px;
  width:350px;
  padding: 0px;

  
  @media ${props => props.theme.breakpoints.lg} {
    height: 200px;
    width:350px;

  }

  @media ${props => props.theme.breakpoints.md} {
    height: 135px;
    padding: 5px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 125px;
    padding: 5px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
`