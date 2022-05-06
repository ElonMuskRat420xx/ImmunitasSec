
import styled from "styled-components"

export const Boxes = styled.div`
width: 100%;
height:100%;
display: grid;
grid-template-columns: repeat(1, 100%);

@media ${props => props.theme.breakpoints.md}{
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}

@media ${props => props.theme.breakpoints.sm}{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  max-width: 500px;
}
@media ${props => props.theme.breakpoints.xs}{
  display: flex;
  gap: 10px;
  max-width: 80%;
  margin-bottom:20rem;
}


`
export const FaqTitle = styled.h5`
font-style: normal;
width:100%;
font-weight: 250;
font-size: 24px;
line-height: 38px;
letter-spacing: 0.01em;
text-indent: -1em;

color: #FFFFFF;
text-align:left;
padding:1rem;
margin:1rem;

    /* border-bottom: solid;
    border-top: solid;
    border-color: #BF5249;
    border-top-color: #212D45; */




@media ${props => props.theme.breakpoints.md} {
  font-size: 28px;
  line-height: 32px;
}
@media ${props => props.theme.breakpoints.sm} {
  font-size: 24px;
  line-height: 26px;
}
`


export const Grid = styled.div`
display:flex;
flex-direction:column;
  @media ${props => props.theme.breakpoints.md}{
  }
  @media ${props => props.theme.breakpoints.sm}{
    flex-direction:column;

}
`

export const FaqText = styled.p`
  max-width: 800px;
  height:55rem;
  overflow-y:scroll;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding:2rem;
  color: rgba(255, 255, 255, 0.5);
  
  scroll-behavior: smooth;
  scrollbar-width: thin;         
  scrollbar-color: #212D45; 
  overflow-x: hidden;
  
  ::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color:transparent;
}
::-webkit-scrollbar-thumb {
  background-color:#212D45;
  border-radius: 15px;
}


  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`