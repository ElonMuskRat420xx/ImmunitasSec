import React from 'react'
import { PrimaryBtn } from './index'
import Link from 'next/link';


export const ContactUsBtn = (props) => (
    <Link href="/Contact">
        <PrimaryBtn>
            Get A Quote
        </PrimaryBtn>
    </Link>
);


export const LearnMoreBtn = (props) => (

    <Link href="/Services">
        <PrimaryBtn>
            Learn More
        </PrimaryBtn>
    </Link>

);

export const FaqBtn = (props) => (

    <Link href="/Faq">
        <PrimaryBtn>
            Explore More Questions
        </PrimaryBtn>
    </Link>

);
