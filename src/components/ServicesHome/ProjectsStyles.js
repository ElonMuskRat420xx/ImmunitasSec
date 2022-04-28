import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: flex;
flex-direction:row;



@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 5;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 2px 2px 20px #212D45 ;
  text-align: center;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const name = styled.div`
  


`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 600;
  color: #9cc9e3;
  padding: 2.5rem 0;
  font-size: ${(props) => props.title ? '1.9rem' : '1.5rem'};
  text-align:left;
  padding-left:35px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left:2rem;
  }


`;

export const Hr = styled.hr`
    width: 50px;
    height: 3px;
    margin-left: 50px;
    margin-bottom: 10px;
    margin-top: -1.5rem;
    border: 0;
    background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  height:140px;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: left;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:2.0rem
  
}
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  width:100%;  
  padding: 15px;
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
`;

export const ExternalLinks = styled.a`
font-weight:bold;
border: none;
border-radius: 10px;
display:flex;
color:#ffff;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: ${({ alt }) => alt ? 'linear-gradient(270deg, #0F1624 0%, #0F1624 100%)' : 'linear-gradient(270deg, #0F1624 0%, #0F1624 100%)'};
transition: 0.5s;


@media ${(props) => props.theme.breakpoints.sm} {
  margin-top:1.25rem;
  }


&:hover{
  color: #ffff;
  background: #212D45;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`