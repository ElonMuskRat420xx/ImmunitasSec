import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import {  DropDownContainer, DropDownIcon, DropDownItem, DropDownItemDesc, DropDownItemTitle, DropDownTextContainer } from '../NavDropDown/NavDropDown'
import { MdNetworkCheck, MdSupervisorAccount, MdHttps, MdCloudDone, MdSettingsCell, MdPersonPin,  MdImportContacts, MdStreetview} from "react-icons/md";
import { Container, Div1, Div2, Div3, NavLink, NavLinkService, SocialIcons } from './HeaderStyles';

export function MenuAbout() {
  return (
    
    <Menu menuButton={
    
    <Div1>
<NavLink>About</NavLink>
    </Div1>
    
    
    
    }>
      
      <MenuItem>

      <DropDownItem href="#" target="_blank" rel="noreferrer">
      <DropDownIcon>
      <MdSupervisorAccount/>
      </DropDownIcon>
      <DropDownTextContainer>
      <DropDownItemTitle>About Immunitas</DropDownItemTitle>
      <DropDownItemDesc>Learn More About Us</DropDownItemDesc>
      </DropDownTextContainer>
      </DropDownItem>
      
      </MenuItem>
      


      <MenuItem>

      <DropDownItem href="#" target="_blank" rel="noreferrer">
      <DropDownIcon>
      <MdImportContacts/>
      </DropDownIcon>
      <DropDownTextContainer>
      <DropDownItemTitle>Contact Us</DropDownItemTitle>
      <DropDownItemDesc>General Enquiries & Customer Support</DropDownItemDesc>
      </DropDownTextContainer>
      </DropDownItem>
    
      </MenuItem>
      
     


      <MenuItem>

      <DropDownItem href="#" target="_blank" rel="noreferrer">
      <DropDownIcon>
      <MdPersonPin/>
      </DropDownIcon>
      <DropDownTextContainer>
      <DropDownItemTitle>Careers</DropDownItemTitle>
      <DropDownItemDesc>Discover Our Current Career Opportunities</DropDownItemDesc>
      </DropDownTextContainer>
      </DropDownItem>
    
      </MenuItem>
      

    </Menu>
  );
}


