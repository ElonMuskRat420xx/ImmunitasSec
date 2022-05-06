import styled from 'styled-components';

export const HeroLeft = styled.div`
display: flex;
align-items: left;
flex-direction: row;
gap:1rem;
margin-bottom: 2rem;
margin-top: 2rem;

@media ${(props) => props.theme.breakpoints.sm} {
  flex-direction:column;
  margin: 0rem;
  padding:2rem
}
`
export const HeroRight = styled.div`
display: flex;
align-items: left;
flex-direction: row-reverse;
gap: 1rem;
margin-bottom: 2rem;
margin-top: 2rem;

@media ${(props) => props.theme.breakpoints.sm} {
  flex-direction: column-reverse;
  margin: 0rem;
  padding:2rem;
}
`

export const LeftSection = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
padding:1rem;
width: 50%;

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

export const RightSection = styled.div`
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
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;
  
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
  max-width: 320px;
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
 display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap:2rem;

  @media ${props => props.theme.breakpoints.md}{
  
  }

  @media ${props => props.theme.breakpoints.sm}{

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



export const Grid = styled.div`
display:grid;
grid-template-columns: repeat( auto-fit, minmax(25rem, 1fr) );
gap:2rem;

  @media ${props => props.theme.breakpoints.md}{
  
  }

  @media ${props => props.theme.breakpoints.sm}{
    grid-template-columns:1fr 1fr; 
  }
`

export const FaqGrid = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
gap:2rem;


  @media ${props => props.theme.breakpoints.md}{

  }

  @media ${props => props.theme.breakpoints.sm}{
    grid-template-columns:1fr;

}
`