import styled from 'styled-components'

export const DropDownContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: -25%;
  top: 40px;
  width: 280px;
  background-color: #fff;
  border-radius: 8px;
  z-index: 100;
  padding: 4px 0;
  cursor: default;
  overflow: hidden;
  transition: 0.3s ease;
  visibility: ${({ active }) => active ? 'visible' : 'hidden'};
  opacity: ${({ active }) => active ? '1' : '0'};
  transform-origin: top;
  transform: ${({ active }) => active ? 'scaleY(1)' : 'scaleY(.3)'};

  @media ${(props) => props.theme.breakpoints.md} {
    top: 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    top: 24px;
  }
`
export const DropDownItem = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  

  &:hover {
    transform: scale(1.0);
    background-color: #0F1624;
    box-shadow: 0 3px 6px 3px rgba(0,0,0,.3);
   padding-left:2px;   
   border-radius:10px;
   height:fit-content;
   transition:.5s;
   padding-bottom:1rem;
   padding-top:1rem;
  
    
  }

`

export const DropDownIcon = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 15px;
  padding-left:3px;

`

export const DropDownTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  
`

export const DropDownItemTitle = styled.h2`
  color: hsl(204,23.8%,95.9%);
  font-size: 17.5px;
  line-height: 25px;
  text-align: start;
`

export const DropDownItemDesc = styled.p`
  color: hsl(204,23.8%,95.9%);
  opacity: 0.5;
  font-size: 15px;
  line-height: 22px;
  text-align: start;
  padding-right:0.2rem;
  
`