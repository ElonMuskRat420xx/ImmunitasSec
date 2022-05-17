import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';

import { BoxText, BoxTitle } from '../Main/MainStyles';

import Methodology from '../../../../../../public/images/Resources/MethodologyCover.png'
import SampleReport from '../../../../../../public/images/Resources/ExampleReportCover.png'


function Resources() {
    return (

        <>
            <BoxTitle>
                Resources
            </BoxTitle>

            <ResourceContainer>

                <ResourceCard>
                    <Grid>
                        <Image className='object-scale-down rounded-[2rem] drop-shadow-2xl	'
                            src={Methodology}
                            layout="responsive"
                        />
                        <TextArea>
                            <Title>
                                Penetration Testing Methodology
                            </Title>

                            <BoxText>
                                Our Penetration Security Testing methodology is derived from the SANS Pentest Methodology, the MITRE ATT&CK framework, and the NIST SP800-115 to uncover security gaps.
                            </BoxText>
                            <li className='list-none underline'>
                                <a href="http://packetlabs-20040397.hs-sites.com/infrastructure-penetration-test-sample-report">
                                    Download Methodology
                                </a>
                            </li>
                        </TextArea>
                    </Grid>
                </ResourceCard>

                <ResourceCard>
                    <Grid>
                        <Image className='object-scale-down rounded-[2rem] drop-shadow-2xl'
                            src={Methodology}
                            layout="responsive"
                        />
                        <TextArea>
                            <Title>
                                Infrastructure Testing Sample Report
                            </Title>

                            <BoxText>
                                Take a look at our sample infrastructure penetration testing report to get a better understanding of what information will be delivered in the final report.
                            </BoxText>
                            <li className='list-none underline'>
                                <a href="http://packetlabs-20040397.hs-sites.com/infrastructure-penetration-test-sample-report">
                                    Download Sample Report
                                </a>
                            </li>
                        </TextArea>
                    </Grid>
                </ResourceCard>

            </ResourceContainer>

        </>
    )
}

export default Resources

const ResourceContainer = styled.div`
display:flex;
flex-direction:row;
gap:4rem;
padding:4rem;

@media ${(props) => props.theme.breakpoints.sm} {
}
@media ${(props) => props.theme.breakpoints.md} {
}
`;

const ResourceCard = styled.div`
display:flex;
align-self: flex-end;
width:100%;
height:100%;

@media ${(props) => props.theme.breakpoints.sm} {
}
@media ${(props) => props.theme.breakpoints.md} {
}
`;

const Grid = styled.div`
display:grid;
grid-template-columns:1fr 1fr ;
gap: 2rem;

@media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns:1fr 1fr ;

}
@media ${(props) => props.theme.breakpoints.md} {

}
`;

const TextArea = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
gap:1rem;

width:25rem;
@media ${(props) => props.theme.breakpoints.sm} {

}
@media ${(props) => props.theme.breakpoints.md} {

}
`;


const Title = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: white;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 20px;
  };

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`
