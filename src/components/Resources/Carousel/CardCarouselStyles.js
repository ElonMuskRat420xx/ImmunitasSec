
import styled from 'styled-components'

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  background: #0F1624;
  padding: 0rem;
  list-style:none;
  display: flex;
  justify-content: space-between; 
  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  margin-left: 32px;
  &:first-of-type{
    margin-left: 0px;
  }

  margin-bottom: 80px;

  //remove scrollbar
  scrollbar-width: none;  
   &::-webkit-scrollbar {
     display: none;
   }

  @media ${props => props.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling:touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`
export const CarouselMobileScrollNode = styled.div`
display: flex;
    min-width: ${({ final }) => final ? `100%;` : `min-content`};

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({ final }) => final ? `120%;` : `min-content`}
  }
`

export const CarouselItem = styled.div`
  background: #212D45;
  border-radius: 15px;
  width: 30rem;
  padding:1rem;
  margin-inline:1rem;
  

  

  @media ${props => props.theme.breakpoints.md} {
    max-width: 124px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 120px;
    background: #0E131F;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;
    
    ${(props) => props.active === props.index ? `opacity: 1` : `opacity: 0.5`}; 
  }
`

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`
export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
  width: 100%;

  @media ${props => props.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`

export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  padding-right: 16px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`
export const CarouselButtons = styled.div`
  width: 288px;

  display: none;
  visibility: hidden;

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => props.active === props.index ? `1` : `.33`};
  transform: ${(props) => props.active === props.index ? `scale(2.5)` : `scale(1.5)`};

  &:focus {
    outline: none;
  }
`

export const CarouselButtonDot = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`


export const CardSection = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" } ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  


  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
  `

export const SliderContainer = styled.div`
display:flex;
flex-direction:row;
`

export const LeftArrow = styled.div`
  position: relative;
  margin-top:5rem;
  padding:1rem;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`

export const RightArrow = styled.div`
  position: relative;
  margin-top:5rem;
  padding:1rem;
  z-index: 10;
  cursor: pointer;
  user-select: none;    
`
