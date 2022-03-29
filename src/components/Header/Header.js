
import Link from 'next/link';
import React from 'react';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';
import { MenuResources } from './MenuResources';
import { MenuServices } from './MenuServices';
import { MenuAbout } from './MenuAbout';

import { AiFillEnvironment, AiFillHome, AiFillMessage  } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';


const Header = (props) =>  (
  
  <Container>

    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Immunitas</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      
    <li> 
    <MenuServices>

    </MenuServices>  
    </li>

    <li>
    <MenuResources>

    </MenuResources>   
    </li>        
      
    <li>
 

    <Div1>
<NavLink>
  
  
  <Link href="/About">About</Link>
  
  
  </NavLink>
    </Div1>
    
    </li>      

     
      
    </Div2>
      <Div3>
        <SocialIcons href="/">
          <AiFillHome size="2.2rem" />
        </SocialIcons>
        <SocialIcons href="/Contact">
          <AiFillMessage size="2.2rem" />
        </SocialIcons>
        <SocialIcons href="/About">
          <AiFillEnvironment size="2.2rem"/>
        </SocialIcons>
      </Div3>

</Container>
);

export default  Header;
