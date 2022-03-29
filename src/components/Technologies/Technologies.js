import React from 'react';


import { FaCheckSquare, FaSearchPlus, FaUserLock} from "react-icons/fa";

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle , ListIcon, ListIcon2} from './TechnologiesStyles';
import { Box, Boxes, BoxNum, Box2, BoxText } from '../Acomplishments/AcomplishmentsStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Finding the vulnerabilities that put
you at risk</SectionTitle>
    <SectionText>
    We can detect 7,000+ vulnerabilities with our blend DAST, SAST + IAST approaches:<br />
    

    <Boxes >
    <Box2 >

    <ListIcon2>
    <picture>
    <FaCheckSquare size="1.5rem"/>
    </picture>
    </ListIcon2>
    
    OWASP Top 10<br />
    

    <ListIcon2>
    <picture>
    <FaCheckSquare size="1.5rem"/>
    </picture>
    </ListIcon2>
    
    Exposed databases<br />

    <ListIcon2>
    <picture>
    <FaCheckSquare size="1.5rem" />
    </picture>
    </ListIcon2>
    
    SQL injections<br />

    <ListIcon2>
    <picture>
    <FaCheckSquare size="1.5rem" />
    </picture>
    </ListIcon2>

    Out-of-band vulnerabilities<br />
  
    </Box2>

    <Box2 >

<ListIcon2>
<picture>
<FaCheckSquare size="1.5rem"/>
</picture>
</ListIcon2>

XSS<br />

<ListIcon2>
<picture>
<FaCheckSquare size="1.5rem" />
</picture>
</ListIcon2>

Misconfigurations<br />

<ListIcon2>
<picture>
<FaCheckSquare size="1.5rem" />
</picture>
</ListIcon2>

And more...<br />

</Box2>
    </Boxes>
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <FaUserLock size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Resolve vulnerabilities faster than you can say “remediation”</ListTitle>
          <ListParagraph>
          <br />
          <b>Eliminate false positives</b>. Save yourself from hours of manually confirming which vulnerabilities are real.<br />
          <br />
          <b>Pinpoint vulnerability locations</b>. See the exact lines of code that need to be fixed so you don’t have to search for them.<br />
          <br />
          <b>Get remediation guidance</b>. Give developers all the information they need to resolve security flaws on their own.<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaSearchPlus size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Easily scan in hard-to-reach places</ListTitle>
          <ListParagraph>
          <br />
          It doesn’t matter what frameworks, languages, or technologies you use. Our scans run almost anywhere:<br />
          <br />
          <b>Single-page applications (SPAs)</b><br />
          <br />
          <b>Script-heavy sites built with JavaScript and HTML5</b><br />
          <br />
          <b>Password-protected areas</b><br />
          <br />
          <b>Complex paths and multi-level forms</b><br />
          <br />
          That means we'll leave no part of your applications unscanned and vulnerable.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaSearchPlus size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
          <br />
          <b>Eliminate false positives</b>. Save yourself from hours of manually confirming which vulnerabilities are real.<br />
          <br />
          <b>Pinpoint vulnerability locations</b>. See the exact lines of code that need to be fixed so you don’t have to search for them.<br />
          <br />
          <b>Get remediation guidance</b>. Give developers all the information they need to resolve security flaws on their own.<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
