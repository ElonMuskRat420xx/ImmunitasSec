import React from 'react'
import { ServiceButtonBack, ServiceButtonFront } from './index'


const ServiceButton = (props) => (
  <ServiceButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
    <ServiceButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ServiceButtonFront>
  </ServiceButtonBack>
);


export default ServiceButton



