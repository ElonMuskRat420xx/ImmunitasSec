import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import {  DropDownContainer, DropDownIcon, DropDownItem, DropDownItemDesc, DropDownItemTitle, DropDownTextContainer,  } from '../NavDropDown/NavDropDown'
import { MdNetworkCheck, MdHttps, MdCloudDone, MdSettingsCell, MdStreetview, MdArrowRight} from "react-icons/md";
import { Container, Div1, Div2, Div3, NavLink, NavLinkService, SocialIcons } from './HeaderStyles';

export function MenuServices() {
  return (
    
    <Menu menuButton={
    
    <Div1>
<NavLink>Services</NavLink>
    </Div1>
    
  
    }>

<MenuItem>

<DropDownItem href="/ApplicationSecurity" target="_blank" rel="noreferrer">
<DropDownIcon>
<MdHttps/>
</DropDownIcon>
<DropDownTextContainer>
<DropDownItemTitle>Web Application Security</DropDownItemTitle>
<DropDownItemDesc>Uncover Vulnerabilities & Insecure Functionality</DropDownItemDesc>
</DropDownTextContainer>
</DropDownItem>

</MenuItem>

      
<MenuItem>

<DropDownItem href="/NetworkSecurity" target="_blank" rel="noreferrer">
<DropDownIcon>
<MdNetworkCheck/>
</DropDownIcon>
<DropDownTextContainer>
<DropDownItemTitle>Network & Infrastructure Security</DropDownItemTitle>
<DropDownItemDesc>Protect Mission Critical Systems From Threat Actors</DropDownItemDesc>
</DropDownTextContainer>
</DropDownItem>

</MenuItem>
      

  
    
<MenuItem>

<DropDownItem href="SmartDevices" target="_blank" rel="noreferrer">
<DropDownIcon>
<MdSettingsCell/>
</DropDownIcon>
<DropDownTextContainer>
<DropDownItemTitle>Mobile, IOT & Smart Devices</DropDownItemTitle>
<DropDownItemDesc>Secure & Harden Smart Devices & Connected Equipment</DropDownItemDesc>
</DropDownTextContainer>
</DropDownItem>

</MenuItem>



<MenuItem>

<DropDownItem href="CloudSecurity" target="_blank" rel="noreferrer">
<DropDownIcon>
<MdSettingsCell/>
</DropDownIcon>
<DropDownTextContainer>
<DropDownItemTitle>Cloud Security</DropDownItemTitle>
<DropDownItemDesc>Secure Cloud Hosted Assets & Environments</DropDownItemDesc>
</DropDownTextContainer>
</DropDownItem>

</MenuItem>



<MenuItem>

<DropDownItem href="SocialEngineering" target="_blank" rel="noreferrer">
<DropDownIcon>
<MdSettingsCell/>
</DropDownIcon>
<DropDownTextContainer>
<DropDownItemTitle>Social Engineering</DropDownItemTitle>
<DropDownItemDesc>Assess The Human Vulnerabilities In Your Organization.</DropDownItemDesc>
</DropDownTextContainer>
</DropDownItem>

</MenuItem>



   
<MenuItem>
  
<DropDownItem href="RedTeaming" target="_blank" rel="noreferrer">
<DropDownIcon>
<MdStreetview/>
</DropDownIcon>
<DropDownTextContainer>
<DropDownItemTitle>Red Team & Simualtion</DropDownItemTitle>
<DropDownItemDesc>Measure Your Resilience To Targeted Attacks</DropDownItemDesc>
</DropDownTextContainer>
</DropDownItem>
  
</MenuItem>

</Menu>
  );
}


