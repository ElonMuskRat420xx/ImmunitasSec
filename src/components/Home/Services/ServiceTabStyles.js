import styled from 'styled-components'


export const Nav = styled("div")`
  & > * {
    margin-left: 1em;
    color: white;
  }
  background: black;
  padding: 1em;
  height: 2em;
  display: flex;
  align-items: center;
`
export const PageBody = styled("div")`
  width: 100%;
  height: 100%;
  padding: 2em;
`
export const TabHead = styled("div")`
  border-bottom: 1px solid black;
  display: flex;
  background: black;
`
export const TabContainer = styled("div")`
  width: 30em;
  height: 30em;
  webkit-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  -moz-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
`
export const TabBody = styled(PageBody)`
  height: 100%;
`
export const Tab = styled("div")`
  padding: 1em;
  background: ${({ selected }) => (selected ? "grey" : "black")};
  * {
    color: white;
  }
`
export const TabGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;

  @media ${props => props.theme.breakpoints.md}{
    display: grid;
    grid-template-columns:repeat(2,1fr);
    grid-template-rows: repeat(4, 1fr);
    gap:1.75rem;
    height:100%;
    width:100%;
    padding:2rem;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns:repeat(1,1fr);
    grid-template-rows: repeat(7, 1fr);
    gap:1rem;
    height:100%;
    padding:1.5rem;
  }
`
export const TabBox = styled.div`
  background: #212D45;
  border-radius: 12px;
  height: 100%;
  padding: 24px;
  transition: 0.5s;

  &:hover {
    color: white;
    background: #212D45 ;
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
  flex-direction: column-reverse;
  margin: 0rem;
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
}
`;

export const RightSection = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
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
}


`;


