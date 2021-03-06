import styled from 'styled-components';

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


export const BtnSeparator = styled.div`
    display: flex;
    justify-content: left;
    gap: 4rem;


@media ${(props) => props.theme.breakpoints.sm} {
  
  }
  @media ${(props) => props.theme.breakpoints.md} {


  }
`;
