
import Link from 'next/link';
import React from 'react';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, List } from './HeaderStyles';
import { AiFillEnvironment, AiFillHome, AiFillMessage } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';


const Header = (props) => (

  <Container>

    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <DiCssdeck size="3rem" /> <span>Immunitas</span>
        </a>
      </Link>
    </Div1>
    <Div2>

      <List>
        <Div1>
          <NavLink>
            <Link href="/Services">Services</Link>
          </NavLink>
        </Div1>
      </List>

      <List>
        <Div1>
          <NavLink>
            <Link href="/Resources">Resources</Link>
          </NavLink>
        </Div1>
      </List>

      <List>
        <Div1>
          <NavLink>
            <Link href="/About">About</Link>
          </NavLink>
        </Div1>
      </List>

    </Div2>

    <Div3>

      <Link href="/">
        <SocialIcons>
          <AiFillHome size="2.2rem" />
        </SocialIcons>
      </Link>

      <Link href="/Contact">
        <SocialIcons>
          <AiFillMessage size="2.2rem" />
        </SocialIcons>
      </Link>

      <Link href="/About">
        <SocialIcons>
          <AiFillEnvironment size="2.2rem" />
        </SocialIcons>
      </Link>

    </Div3>

  </Container>
);

export default Header;
