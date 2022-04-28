import styled from 'styled-components';


export const Grid = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 24px;
margin: 24px 0 40px;
@media ${props => props.theme.breakpoints.md}{
  gap: 16px;
  margin: 20px 0 32px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}
@media ${props => props.theme.breakpoints.sm}{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  max-width: 500px;
  margin: 24px auto;
}
`

export const Card = styled.div`
background: #212D45;
border-radius: 15px;
height: 100%;
width:100%;
padding: 2rem;
@media ${props => props.theme.breakpoints.lg} {
  height: 100%;
}
@media ${props => props.theme.breakpoints.md} {
  height: 100%;
  width:100%;

  padding: 2rem;
}
@media ${props => props.theme.breakpoints.sm} {
  height: 100%;
  padding: 2rem;
  
}
`
export const Title = styled.h5`
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

export const Text = styled.p`
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

export const HeroLeft = styled.div`
display: flex;
align-items: left;
flex-direction: row;

margin-bottom: 1rem;
margin-top: 1rem;
@media ${(props) => props.theme.breakpoints.sm} {
  flex-direction: column-reverse;
  margin: 0rem;
}
`


export const HeroRight = styled.div`
display: flex;
align-items: left;
flex-direction: row-reverse;
gap: 1rem;


margin-bottom: 1rem;
margin-top: 1rem;
@media ${(props) => props.theme.breakpoints.sm} {
  flex-direction: column-reverse;
  margin: 0rem;
}
`
export const LeftColumnContent = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width: 60%;


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

export const LeftSection = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
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

export  const ImageContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
width: 100%;

  @media  ${(props) => props.theme.breakpoints.sm} {
    width: 75%;
  }
`

export const RightSection = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width: 100%;
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

export const CenterColumnContent = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width: 100%;


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