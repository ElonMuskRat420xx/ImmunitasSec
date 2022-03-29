import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import {  DropDownContainer, DropDownIcon, DropDownItem, DropDownItemDesc, DropDownItemTitle, DropDownTextContainer } from '../NavDropDown/NavDropDown'
import { MdWbIridescent, MdLiveHelp, MdInsertChart, MdLibraryBooks, MdBook, MdStreetview} from "react-icons/md";
import { Container, Div1, Div2, Div3, NavLink, NavLinkService, SocialIcons } from './HeaderStyles';

export function MenuResources() {
  return (
    
    <Menu menuButton={
    
    <Div1>
<NavLink>Resources</NavLink>
    </Div1>
    
    
    }>
      
      <MenuItem>

      <DropDownItem href="Blog" target="_blank" rel="noreferrer">
      <DropDownIcon>
      <MdBook/>
      </DropDownIcon>
      <DropDownTextContainer>
      <DropDownItemTitle>Resource Hub</DropDownItemTitle>
      <DropDownItemDesc>Stay Informed About Current & Emerging Issues In Information Security With In-Depth Insight & Commentary From Industry Experts.
      </DropDownItemDesc>
      </DropDownTextContainer>
      </DropDownItem>
      
      </MenuItem>
      

      <MenuItem>

      <DropDownItem href="Blog" target="_blank" rel="noreferrer">
      <DropDownIcon>
      <MdBook/>
      </DropDownIcon>
      <DropDownTextContainer>
      <DropDownItemTitle>Blog</DropDownItemTitle>
      <DropDownItemDesc>Read Insights Into Good Practices, Content That Is Practical & Targeted At Action.</DropDownItemDesc>
      </DropDownTextContainer>
      </DropDownItem>
      
      </MenuItem>
      
      <MenuItem>

      <DropDownItem href="Faq" target="_blank" rel="noreferrer">
      <DropDownIcon>
      <MdLiveHelp/>
      </DropDownIcon>
      <DropDownTextContainer> 
      <DropDownItemTitle>Glossary</DropDownItemTitle>
      <DropDownItemDesc>
      Cut through the jargon with our guide to some of our industry’s most commonly used terms.
      </DropDownItemDesc>
      </DropDownTextContainer>
      </DropDownItem>

      </MenuItem>

    
     

      <MenuItem>

      <DropDownItem href="Statistics" target="_blank" rel="noreferrer">
      <DropDownIcon>
      <MdInsertChart/>
      </DropDownIcon>
      <DropDownTextContainer>
      <DropDownItemTitle>CyberSecurity Statistics</DropDownItemTitle>
      <DropDownItemDesc>The latest CyberSecurity Statistics</DropDownItemDesc>
      </DropDownTextContainer>
      </DropDownItem>

      </MenuItem>


   

    


    <MenuItem>

    <DropDownItem href="News" target="_blank" rel="noreferrer">
    <DropDownIcon>
    <MdLibraryBooks/>
    </DropDownIcon>
    <DropDownTextContainer>
    <DropDownItemTitle>CyberSecurity News </DropDownItemTitle>  
    <DropDownItemDesc> The Latest CyberSecurity News</DropDownItemDesc>
    </DropDownTextContainer>
    </DropDownItem>

</MenuItem>

<MenuItem>

<DropDownItem href="Faq" target="_blank" rel="noreferrer">
<DropDownIcon>
<MdLiveHelp/>
</DropDownIcon>
<DropDownTextContainer> 
<DropDownItemTitle>FAQ</DropDownItemTitle>
<DropDownItemDesc>Frequently Asked Questions</DropDownItemDesc>
</DropDownTextContainer>
</DropDownItem>

</MenuItem>



  


    </Menu>
  );
}


