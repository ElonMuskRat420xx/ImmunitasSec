import React from 'react';
import Image from 'next/image';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, ListIcon, ListIcon2, HeroRight, HeroLeft, LeftSection, RightSection } from './TechnologiesStyles';
import { Box, Boxes, BoxNum, Box2, BoxText, } from '../Acomplishments/AcomplishmentsStyles';

import TechHeroImg from '../../../public/images/RedscanHero.svg'
import { FaCheckSquare, FaSearchPlus, FaUserLock } from "react-icons/fa";


const Technologies = () => (
  <>
    <HeroLeft >

      <LeftSection>
        <SectionTitle>Finding The Vulnerabilities
          <br />
          That Put You At Risk
        </SectionTitle>

        <SectionText>
          We can detect 7,000+ vulnerabilities with our blend DAST, SAST + IAST approaches:<br />


          <Boxes >
            <Box2 >

              <ListIcon2>
                <picture>
                  <FaCheckSquare size="1.5rem" />
                </picture>
              </ListIcon2>

              OWASP Top 10<br />


              <ListIcon2>
                <picture>
                  <FaCheckSquare size="1.5rem" />
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
                  <FaCheckSquare size="1.5rem" />
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
      </LeftSection>

      <RightSection>
        <Image
          src={TechHeroImg}
          alt="Card Image"
          width="1000px"
          height="1000px"
        >
        </Image>
      </RightSection>

    </HeroLeft>
  </>
);

export default Technologies;
