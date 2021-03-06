import styled from 'styled-components';

export const HeroLeft = styled.div`
display: flex;
align-items: left;
flex-direction: row;
margin-bottom: 5rem;
margin-top: 1rem;

@media ${(props) => props.theme.breakpoints.sm} {
  flex-direction: column;
  margin: 0rem;
  padding:2rem;
}
`
export const HeroRight = styled.div`
display: flex;
align-items: left;
flex-direction: row-reverse;
gap: 2rem;
margin-bottom: 1rem;
margin-top: 1rem;

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
}
`;


export const LeftHero = styled.div`
  width: 75%;
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

