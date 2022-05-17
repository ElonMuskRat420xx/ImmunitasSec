import styled from 'styled-components';

export const HeroLeft = styled.div`
display: flex;
align-items: left;
flex-direction: row-reverse;


@media ${(props) => props.theme.breakpoints.sm}

{
  flex-direction:column;
}
`
export const HeroRight = styled.div`
display: flex;
align-items: left;
flex-direction: row;


@media ${(props) => props.theme.breakpoints.sm} {
  flex-direction: column;
}
`

export const LeftSection = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width: 50%;
padding:2rem;

@media ${(props) => props.theme.breakpoints.sm} {
  width: 80%;
  display: flex;
  flex-direction: column;
}
@media ${(props) => props.theme.breakpoints.md} {
  width: 100%;
  display: flex;
  flex-direction: column;
}
`;

export const RightSection = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:50%;
padding:2rem;

@media ${(props) => props.theme.breakpoints.sm} {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
@media ${(props) => props.theme.breakpoints.md} {
  width: 100%;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
}
`;


export const ContactRightSection = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:50%;
padding:1rem;

@media ${(props) => props.theme.breakpoints.sm} {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
@media ${(props) => props.theme.breakpoints.md} {
  width: 100%;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
}
`;
export const List = styled.ul`
display:flex;
flex-direction:row;
gap: 2rem;
margin: 2rem 0;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;
  color:#BF5249;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;

@media ${props => props.theme.breakpoints.md}{
  max-width: 203px;
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  max-width: 320px;
  flex-direction: row;
}
`

export const FeatureGrid = styled.div`
 display: flex;
 flex-direction:column;
 gap:2rem;
  @media ${props => props.theme.breakpoints.md}{
  }
  @media ${props => props.theme.breakpoints.sm}{
    gap:1rem;

  }
`
export const Box = styled.div`
background: #212D45;
border-radius: 12px;
height: 100%;
padding: 2rem;


@media ${props => props.theme.breakpoints.lg} {
  height: 100%;

}

@media ${props => props.theme.breakpoints.md} {
  height: 100%;
  padding: 1rem;
}

@media ${props => props.theme.breakpoints.sm} {
  height: 100%;
  padding: 1rem;

}
`
export const BoxTitle = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 5px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
}
`

export const BoxText = styled.p`
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


export const BoxTextBold = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: white;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 20px;
  };

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`

export const FaqGrid = styled.div`
display:flex;
flex-direction:column;
gap:2rem;

  @media ${props => props.theme.breakpoints.md}{

  }

  @media ${props => props.theme.breakpoints.sm}{
    grid-template-columns:1fr;
    padding:0rem;


}
`
export const BlockFill = styled.h1`

    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    top: 2%;
    left: 0%;
    height:15rem;
    width:15rem;
    background-color: #BF5249;
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);

  @media ${props => props.theme.breakpoints.md} 
  {
   
  };
  @media ${props => props.theme.breakpoints.sm} 
  { 
    height:10rem;
    width:10rem;
    top: 0%;
    left: 5%;
};
`
export const HeadlineHero = styled.div`
display: flex;
align-items: left;
flex-direction: column;
gap:1rem;
margin-bottom: 2rem;
margin-top: 2rem;

@media ${(props) => props.theme.breakpoints.sm} {
  flex-direction:column;
  margin: 0rem;
  padding:0rem
}
`
export const HeadlineTitleSection = styled.div`
display:flex;
flex-direction:row;
padding:1rem;
width: 115%;
height:25rem;

@media ${(props) => props.theme.breakpoints.sm} {
  width: 100%;
  display: flex;
  flex-direction: column;
}
@media ${(props) => props.theme.breakpoints.md} {
  width: 100%;
  display: flex;
  flex-direction: column;
}
`;

export const HeadlineTextSection = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width: 100%;
height:100%;

@media ${(props) => props.theme.breakpoints.sm} {
  width: 80%;
  display: flex;
  flex-direction: column;
}
@media ${(props) => props.theme.breakpoints.md} {
  width: 100%;
  display: flex;
  flex-direction: column;
}
`;


export const LeftHeroSection = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width: 55%;
padding:2rem;

@media ${(props) => props.theme.breakpoints.sm} {
  width: 80%;
  display: flex;
  flex-direction: column;
}
@media ${(props) => props.theme.breakpoints.md} {
  width: 100%;
  display: flex;
  flex-direction: column;
}
`;


export const RightHeroSection = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width: 50%;
padding:2rem;

@media ${(props) => props.theme.breakpoints.sm} {
  width: 80%;
  display: flex;
  flex-direction: column;
}
@media ${(props) => props.theme.breakpoints.md} {
  width: 100%;
  display: flex;
  flex-direction: column;
}
`;




export const LeftHeroSectionTable = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width: 45%;


@media ${(props) => props.theme.breakpoints.sm} {
  width: 80%;
  display: flex;
  flex-direction: column;
}
@media ${(props) => props.theme.breakpoints.md} {
  width: 100%;
  display: flex;
  flex-direction: column;
}
`;


export const RightHeroSectionTable = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width: 50%;
padding:4rem;


@media ${(props) => props.theme.breakpoints.sm} {
  width: 80%;
  display: flex;
  flex-direction: column;
  padding:2rem;
}
@media ${(props) => props.theme.breakpoints.md} {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding:2rem;

}
`;


export const Grid = styled.div`
display:grid;
grid-template-columns: repeat( auto-fit, minmax(10rem, 1fr) );
gap:2rem;

  @media ${props => props.theme.breakpoints.md}{
  
  }

  @media ${props => props.theme.breakpoints.sm}{
    grid-template-columns:1fr 1fr 1fr;
    padding:2rem; 
  }
`

export const LeftSectionFaq = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
padding:2rem;

@media ${(props) => props.theme.breakpoints.sm} {
  width: 80%;
  display: flex;
  flex-direction: column;
}
@media ${(props) => props.theme.breakpoints.md} {
  width: 100%;
  display: flex;
  flex-direction: column;
}
`;

export const RightSectionFaq = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
width:30%;
padding:2rem;

@media ${(props) => props.theme.breakpoints.sm} {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
@media ${(props) => props.theme.breakpoints.md} {
  width: 100%;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
}
`;

export const LeftSectionContact = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width: 50%;
padding:4rem;

@media ${(props) => props.theme.breakpoints.sm} {
  width: 80%;
  display: flex;
  flex-direction: column;
}
@media ${(props) => props.theme.breakpoints.md} {
  width: 100%;
  display: flex;
  flex-direction: column;
}
`;

export const RightSectionContact = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:65%;
padding:2rem;

@media ${(props) => props.theme.breakpoints.sm} {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
@media ${(props) => props.theme.breakpoints.md} {
  width: 100%;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
}
`;
