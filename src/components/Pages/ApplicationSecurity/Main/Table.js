import React from 'react';
import Image from 'next/image';

import styled from 'styled-components';
import { Section, SectionSubTitle } from '../../../../styles/GlobalComponents';
import { Box, BoxTitle, BoxTextBold, BoxText } from './MainStyles';
import { FaCheckSquare, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

import ContactHero from '../../../../../public/images/Mail.svg'


function Table() {
    return (
        <>
            <div class="overflow-auto lg:overflow-visible ">
                <table class="table border-separate space-y-6 text-sm rounded-xl ">
                    <thead class=" text-white  ">
                        <tr>

                            <th class=" p-2"></th>

                            <th class="p-2 text-left">
                                <BoxTextBold>
                                    Infrastructure Penetration Testing
                                </BoxTextBold>
                            </th>
                            <th class="text-left">
                                <BoxTextBold>
                                    Objective-Based Penetration Testing
                                </BoxTextBold>
                            </th>

                        </tr>
                    </thead>

                    <tbody>

                        <tr class="">
                            <td class="p-3">
                                <BoxText>
                                    Thorough Foundational Assessment of Networks and Systems
                                </BoxText>
                            </td>
                            <td class="p-3">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                            <td class="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>

                        <tr class="">
                            <td class="p-3">
                                <BoxText>
                                    Network Security
                                </BoxText>
                            </td>
                            <td class="p-3">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                            <td class="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>

                        <tr class="">
                            <td class="p-3">
                                <BoxText>
                                    System Hardening
                                </BoxText>
                            </td>
                            <td class="p-3">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                            <td class="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>

                        <tr class="">
                            <td class="p-3">
                                <BoxText>
                                    OS and Third-Party Patching
                                </BoxText>
                            </td>
                            <td class="p-3">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                            <td class="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>

                        <tr class="">
                            <td class="p-3">
                                <BoxText>
                                    Authentication Attacks
                                </BoxText>
                            </td>
                            <td class="p-3">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                            <td class="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>

                        <tr class="">
                            <td class="p-3">
                                <BoxText>
                                    Cryptography Attacks
                                </BoxText>
                            </td>
                            <td class="p-3">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                            <td class="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>

                        <tr class="">
                            <td class="p-3">
                                <BoxText>
                                    Email Phishing
                                </BoxText>
                            </td>
                            <td class="p-3">
                                <FaTimesCircle size="1.5rem" color="#BF5249" />
                            </td>
                            <td class="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>

                        <tr class="">
                            <td class="p-3">
                                <BoxText>
                                    Ransomware Assessment
                                </BoxText>
                            </td>
                            <td class="p-3">
                                <FaTimesCircle size="1.5rem" color="#BF5249" />
                            </td>
                            <td class="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>

                        <tr class="">
                            <td class="p-3">
                                <BoxText>
                                    Active Directory Bloodhound Assessment
                                </BoxText>
                            </td>
                            <td class="p-3">
                                <FaTimesCircle size="1.5rem" color="#BF5249" />
                            </td>
                            <td class="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>

                        <tr class="">
                            <td class="p-3">
                                <BoxText>
                                    Antivirus Bypass
                                </BoxText>
                            </td>
                            <td class="p-3">
                                <FaTimesCircle size="1.5rem" color="#BF5249" />
                            </td>
                            <td class="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>


                        <tr class="">
                            <td class="p-3">
                                <BoxText>
                                    Adversary Simulation
                                </BoxText>
                            </td>
                            <td class="p-3">
                                <FaTimesCircle size="1.5rem" color="#BF5249" />
                            </td>
                            <td class="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>


                        <tr class="">
                            <td class="p-3">
                                <BoxText>
                                    Physical Security Attacks
                                </BoxText>
                            </td>
                            <td class="p-3">
                                <FaTimesCircle size="1.5rem" color="#BF5249" />
                            </td>
                            <td class="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>


                        <tr class="">
                            <td class="p-3">
                                <BoxText>
                                    Social Engineering
                                </BoxText>
                            </td>
                            <td class="p-3">
                                <FaTimesCircle size="1.5rem" color="#BF5249" />
                            </td>
                            <td class="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;

