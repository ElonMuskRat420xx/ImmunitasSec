import React from 'react';
import styled from 'styled-components';
import {SectionContact, SectionTitle, SectionText} from '../../styles/GlobalComponents/index';
import { AiOutlineFileDone,AiOutlineCreditCard, AiOutlineCarryOut , AiOutlineUser  } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from '../Projects/ProjectsStyles';


function AboutSection() {
    return (

<SectionContact> 
<SectionTitle>
Immunitas is 100% Dedicated to Cybersecurity
</SectionTitle>
<SectionText>
The name “Vumetric” comes from a combination of the words “Vulnerability” and “Metric”, the foundation of what we aim to provide, as we help our clients identify and prioritize their vulnerabilities and risks. Vumetric is a global provider of ISO9001:2015 certified penetration testing and cybersecurity services.
</SectionText>

<SectionTitle>
Our Mission and Values
</SectionTitle>

<GridContainerAbout>

<a href="#" class="block p-6 max-w-sm bg-[#212D45] rounded-lg shadow-md hover:bg-[#0F1624] ">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Quality</h5>
    
    <p class="font-normal text-white">Our projects are based on the value generated for your business, which means we always aim to deliver quality projects to provide the best return on your investment.
</p>
</a>

<a href="#" class="block p-6 max-w-sm bg-[#212D45] rounded-lg shadow-md hover:bg-[#0F1624] ">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Pragmatism</h5>
    
    <p class="font-normal text-white">Our services offer concrete recommendations you can start implementing today. Our primary goal is to provide practical solutions to our clients' cybersecurity challenges.
</p>
</a>

<a href="#" class="block p-6 max-w-sm bg-[#212D45] rounded-lg shadow-md hover:bg-[#0F1624] ">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Quality</h5>
    
    <p class="font-normal text-white">Our projects are based on the value generated for your business, which means we always aim to deliver quality projects to provide the best return on your investment.
</p>
</a>



</GridContainerAbout>




</SectionContact>
            
)
}



export default AboutSection;






export const GridContainerAbout = styled.section`
display: inline-flex;
grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
padding: 3rem;
column-gap: 3rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 5;
  align-items:center;
}

`

    {/* Understand your needs
Context of your request, objective and expectations

Determine your project scope
Nature of the request, target environment, deadlines, etc.

Provide a cost approximation
According to the scope and the objectives of the project

Provide a detailed, no obligation quote
Generally within a maximum delay of 72 hours */}