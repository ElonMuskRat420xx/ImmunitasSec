import React from 'react';
import styled from 'styled-components';
import {SectionTitle, SectionText, Section} from '../../styles/GlobalComponents/index';
import Accordion from "./AccordionFAQ";






function Faq() {
    return (



<Section>


<SectionTitle>
Immunitas is 100% Dedicated to Cybersecurity
</SectionTitle>
<SectionText>
The name “Vumetric” comes from a combination of the words “Vulnerability” and “Metric”, the foundation of what we aim to provide, as we help our clients identify and prioritize their vulnerabilities and risks. Vumetric is a global provider of ISO9001:2015 certified penetration testing and cybersecurity services.
</SectionText>

<section class="after:bg-jacarta-900/60 relative bg-cover bg-center bg-no-repeat py-10 after:absolute after:inset-0">
        <div class="container relative z-10">
          <h1 class="font-display mb-10 text-center text-[25px] font-medium text-white">How can we help?</h1>
          <form action="search" class="relative mx-auto block max-w-md">
            <input type="search" class="text-black placeholder-jacarta-500     focus:outline-none focus:border-[#212D45] focus:ring-1 focus:ring-[#212D45]
 border-jacarta-100 w-full rounded-2xl border py-[0.6875rem] px-4 pl-10" placeholder="Search"/>
            <span class="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="fill-jacarta-500 h-4 w-4">
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
              </svg>
            </span>
          </form>
        </div>
      </section>




      <section class="relative py-10">
     
      <div class="container">
        <h2 class="font-display text-jacarta-700 mb-10 text-center text-[25px] font-medium dark:text-white ">
          Or browse categories
        </h2>

        <div class="mb-15 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-4 place-items-center">
          <a href="#" class="block p-6 max-w-sm bg-[#212D45] rounded-lg shadow-md hover:bg-[#0F1624]">
            <h3 class="font-display text-jacarta-700 mb-2 text-base font-semibold dark:text-white">
              Getting started
            </h3>
            <p class="dark:text-jacarta-300">
              Learn how to create an account, set up your wallet, and what you can do.
            </p>
          </a>
          <a href="#" class="block p-6 max-w-sm bg-[#212D45] rounded-lg shadow-md hover:bg-[#0F1624]">
            <h3 class="font-display text-jacarta-700 mb-2 text-base font-semibold dark:text-white">Buying</h3>
            <p class="dark:text-jacarta-300">
              Learn how to create an account, set up your wallet, and what you can do.
            </p>
          </a>
          <a href="#" class="block p-6 max-w-sm bg-[#212D45] rounded-lg shadow-md hover:bg-[#0F1624]">
            <h3 class="font-display text-jacarta-700 mb-2 text-base font-semibold dark:text-white">Selling</h3>
            <p class="dark:text-jacarta-300">
              Learn how to create an account, set up your wallet, and what you can do.
            </p>
          </a>
          <a href="#" class="block p-6 max-w-sm bg-[#212D45] rounded-lg shadow-md hover:bg-[#0F1624]">
            <h3 class="font-display text-jacarta-700 mb-2 text-base font-semibold dark:text-white">Creating</h3>
            <p class="dark:text-jacarta-300">
              Learn how to create an account, set up your wallet, and what you can do.
            </p>
          </a>
          <a href="#" class="block p-6 max-w-sm bg-[#212D45] rounded-lg shadow-md hover:bg-[#0F1624]">
            <h3 class="font-display text-jacarta-700 mb-2 text-base font-semibold dark:text-white">User Safety</h3>
            <p class="dark:text-jacarta-300">
              Learn how to create an account, set up your wallet, and what you can do.
            </p>
          </a>
          <a href="#" class="block p-6 max-w-sm bg-[#212D45] rounded-lg shadow-md hover:bg-[#0F1624]">
            <h3 class="font-display text-jacarta-700 mb-2 text-base font-semibold dark:text-white">Partners</h3>
            <p class="dark:text-jacarta-300">
              Learn how to create an account, set up your wallet, and what you can do.
            </p>
          </a>
        </div>
      
        <h2 class="font-display text-jacarta-700 mb-10 my-10 text-center text-[25px] font-medium dark:text-white">
          Frequently asked questions
        </h2>
      
       
        <p class="mx-auto mb-10 max-w-[75rem] text-center text-3xl">
          Join our community now to get free updates and also alot of freebies are waiting for you or
          <a href="/Contact" class="text-pink-500"> Contact Support</a>
        </p>

  </div>


<GridContainerFAQ>
<Accordion questionsAnswers={questionsAnswers} />
</GridContainerFAQ>

            
</section>
</Section>
)
} 

export default Faq;



export const GridContainerFAQ = styled.section`
display: inline-flex;
grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
padding: 2.5rem;

align-items: -webkit-center;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 5;
}

`

const questionsAnswers = [
  {
    question: "What is a penetration test?",
    answer:
      "A penetration test is a simulated hacking attempt that identifies opportunities for real hackers to break through your defences and perform various malicious acts. It generally leverages tools used by hackers and various professional methodologies to replicate the steps that modern hackers would take to intrude into your IT systems. A pentest attempts to exploit your vulnerabilities to determine their potential impact, should they be used in a real hacking scenario. They provide a list of vulnerabilities with their respective level of severity, as well as technical recommendations to help your team apply corrective measures and focus on the most critical vulnerabilities."
      
  , 
  },
  {
    question: "Why perform a penetration test?",
    answer:
      "Penetration tests can be performed with various intentions and help reach various objectives. From meeting third-party requirements, to securing business partnerships, to testing a new feature as part of a development cycle, they can serve several purposes. Here are some of the main reasons to perform a penetration test: Comply with requirements that mandate security testing. (3rd-party, PCI, ISO27001, etc.) Identify vulnerabilities and get a list of prioritized fixes. Protect data and systems from attackers. Get the perspective of a hacker. Prevent financial losses",

      
  },
  {
    question: "How much does a penetration test cost?",
    answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
  },
  {
    question: "When should I conduct a penetration test?",
    answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
  },
  {
    question: "How long does a penetration testing project generally last?",
    answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,

  },

  {
    question: "What is the difference between a pentest and a vulnerability scan?",
    answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,

  },

  {
    question: "What is the difference between automated and manual pentests?",
    answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,

  },


  {
    question: "What are the best penetration testing methodologies and standards?",
    answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,

  },


];
