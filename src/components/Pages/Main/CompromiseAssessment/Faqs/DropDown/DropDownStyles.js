
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
export const FaqTitle = styled.h2`
    max-width: 800px;
    font-size: 24px;
    line-height: 40px;
    font-weight: 300;
    color: rgba(255,255,255,0.5);
    text-align:left;
    text-indent: -2.5rem;
    padding:1rem;


@media ${props => props.theme.breakpoints.md} {
  font-size: 28px;
  line-height: 32px;
}
@media ${props => props.theme.breakpoints.sm} {
  font-size: 18px;
  line-height: 38px;
  width:100%;
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
  height:40rem;
  overflow-y:scroll;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
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

export const FaqsTitle = styled.p`
  font-style: normal;
  font-weight: normal;
  text-align:left;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: white;
  text-indent: -2.5rem;
  padding:1rem;


  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 20px;
  };

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`
