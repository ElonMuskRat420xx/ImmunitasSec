import React from 'react'

import { NavButtonBack, NavButtonFront } from './index'

const NavButton = (props) => (
  
  <NavButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
    <NavButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</NavButtonFront>
  </NavButtonBack>
 
);

export default NavButton

