import styled from 'styled-components';

export const HeroLeft = styled.div`
display: flex;
align-items: left;
flex-direction: row;

margin-bottom: 2rem;
margin-top: 2rem;

@media ${(props) => props.theme.breakpoints.sm} {
  flex-direction: column;
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
  flex-direction: column;
  margin: 0rem;
  padding:2rem;
}
`

export const LeftSection = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width: 55%;
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

export const LowerLeftSection = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
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
justify-content:center;
width: 100%;
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

export const LowerRightSection = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width: 100%;
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
