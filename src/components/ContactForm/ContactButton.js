import styled from "styled-components"

export const ContactButtonContainer = styled.div`
    position: fixed;
    bottom: 0%;
    right: 2rem;
    margin-bottom:2rem;

  @media ${(props) => props.theme.breakpoints.md} {
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom:1rem;
    margin-right:-2rem;

  }
`

export const ChatButton = styled.button`

    background:#BF5249;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 6px, rgb(0 0 0 / 20%) 0px 2px 24px;
    border: none;
    transition: box-shadow 150ms ease-in-out 0s;
    border-radius: 50%;
    padding-right: 2rem;
    padding-left: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    transform: scale(0.7);
  }

  @media ${(props) => props.theme.breakpoints.sm} {

    transform: scale(0.65);
    border-radius: 50%;
    padding-bottom: 2rem;

  }

`
