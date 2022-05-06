
import styled from 'styled-components';

export const StyledCard = styled.div`
  background: rgb(33, 45, 69);
  padding: 2rem;
  border-radius: 25px;
  @media ${(props) => props.theme.breakpoints.sm}  {
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakpoints.xs}  {
  }
`
export const Content = styled.div`

  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
  }
`

export const CardImage = styled.div`
  width: 50%;
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
   
  }
`
export const ServiceCardText = styled.p`
  font-size: 18px;
  line-height: 28px;
  font-weight: 300;
  padding-inline:2rem;
  padding-block:1rem;
  color: rgba(255, 255, 255, 0.5);

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

export const ServiceCardTitle = styled.h2`
  font-weight: 800;
  font-size: 32px;
  line-height: 36px;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
    height:25%
  }
`



