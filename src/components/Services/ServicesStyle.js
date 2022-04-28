import styled from 'styled-components';


export const TopHeroContainer = styled.div`

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

export const TopHeroRowReverse = styled.div`

display: flex;
    flex-direction: row-reverse;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    
  }
`
export const TopRightColumn = styled.div`

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
export const TopRightColContent = styled.div`

display: flex;
flex-direction: column;
-webkit-box-pack: center;
justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    
  }
`
export const TopLeftColumn = styled.div`

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
export const TopLeftColContent = styled.div`

display: flex;
flex-direction: column;
-webkit-box-pack: center;
justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
  }
`

export const TopRightColImage = styled.div`
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


export const LeftSection = styled.div`
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

export const ServiceGrid = styled.section`
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 2.5rem 2.5rem; 

@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 5;
}
`

export const ServiceSection = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: ${(props) => props.nopadding ? "0" : "1rem 1rem 0" } ;
  margin: 0 auto;
  box-sizing: content-box;
  position: relative;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;
    width: calc(100vw - 32px);
    flex-direction: column;
  }
  `





