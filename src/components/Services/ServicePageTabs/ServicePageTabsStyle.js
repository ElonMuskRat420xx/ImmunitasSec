import styled from 'styled-components'

export const TabBox = styled.div`
  background: #212D45;
  border-radius: 12px;
  height: 100%;
  width:100%;
  padding: 2rem;
  margin-block:1rem;
  transition: 0.5s;

  &:hover {
    color: white;
    background: transparent ;
    transform:scale(1.05);
    cursor:pointer;
  }
  @media ${props => props.theme.breakpoints.lg} {
  }

  @media ${props => props.theme.breakpoints.md} {
    
  }

  @media ${props => props.theme.breakpoints.sm} {


  }
`
export const HeroLeft = styled.div`
display: flex;
align-items: left;
flex-direction: row;
gap: 2rem;

@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
}
`
export const HeroRight = styled.div`
display: flex;
align-items: left;
flex-direction: row-reverse;
gap: 2rem;

@media ${(props) => props.theme.breakpoints.sm} {
  flex-direction: column-reverse;
  margin: 0rem;
}
`
export const LeftSection = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
width: 50%;
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
}`;

export const RightSection = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;

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
}`;


export const TabsLeft = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
width: 25%;
height: 100%;
padding: 2rem;
margin-top:2rem;

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

export const TabsRight = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-end;
height: 100%;
padding: 2rem;
margin-top:2rem;

 
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
}`;





