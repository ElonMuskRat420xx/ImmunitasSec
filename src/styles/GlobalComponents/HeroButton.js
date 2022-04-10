import React from 'react'
import { HeroButtonBack, HeroButtonFront } from './index'


const HeroButton = (props) => (
  <HeroButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
    <HeroButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</HeroButtonFront>
  </HeroButtonBack>
);


export default HeroButton



