import React from 'react';

import { BoxTextBold, BoxText } from './MainStyles';
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function Table() {
    return (
        <>
            <div className="overflow-auto lg:overflow-visible ">
                <table className="table border-separate space-y-6 text-sm rounded-xl ">
                    <thead className=" text-white  ">
                        <tr>

                            <th className=" p-2"></th>

                            <th className="p-2 text-left">
                                <BoxTextBold>
                                    Infrastructure Penetration Testing
                                </BoxTextBold>
                            </th>
                            <th className="text-left">
                                <BoxTextBold>
                                    Objective-Based Penetration Testing
                                </BoxTextBold>
                            </th>

                        </tr>
                    </thead>

                    <tbody>

                        <tr className="">
                            <td className="p-3">
                                <BoxText>
                                    Thorough Foundational Assessment of Networks and Systems
                                </BoxText>
                            </td>
                            <td className="p-3">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                            <td className="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>

                        <tr className="">
                            <td className="p-3">
                                <BoxText>
                                    Network Security
                                </BoxText>
                            </td>
                            <td className="p-3">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                            <td className="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>

                        <tr className="">
                            <td className="p-3">
                                <BoxText>
                                    System Hardening
                                </BoxText>
                            </td>
                            <td className="p-3">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                            <td className="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>

                        <tr className="">
                            <td className="p-3">
                                <BoxText>
                                    OS and Third-Party Patching
                                </BoxText>
                            </td>
                            <td className="p-3">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                            <td className="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>

                        <tr className="">
                            <td className="p-3">
                                <BoxText>
                                    Authentication Attacks
                                </BoxText>
                            </td>
                            <td className="p-3">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                            <td className="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>

                        <tr className="">
                            <td className="p-3">
                                <BoxText>
                                    Cryptography Attacks
                                </BoxText>
                            </td>
                            <td className="p-3">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                            <td className="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>

                        <tr className="">
                            <td className="p-3">
                                <BoxText>
                                    Email Phishing
                                </BoxText>
                            </td>
                            <td className="p-3">
                                <FaTimesCircle size="1.5rem" color="#BF5249" />
                            </td>
                            <td className="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>

                        <tr className="">
                            <td className="p-3">
                                <BoxText>
                                    Ransomware Assessment
                                </BoxText>
                            </td>
                            <td className="p-3">
                                <FaTimesCircle size="1.5rem" color="#BF5249" />
                            </td>
                            <td className="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>

                        <tr className="">
                            <td className="p-3">
                                <BoxText>
                                    Active Directory Bloodhound Assessment
                                </BoxText>
                            </td>
                            <td className="p-3">
                                <FaTimesCircle size="1.5rem" color="#BF5249" />
                            </td>
                            <td className="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>

                        <tr className="">
                            <td className="p-3">
                                <BoxText>
                                    Antivirus Bypass
                                </BoxText>
                            </td>
                            <td className="p-3">
                                <FaTimesCircle size="1.5rem" color="#BF5249" />
                            </td>
                            <td className="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>


                        <tr className="">
                            <td className="p-3">
                                <BoxText>
                                    Adversary Simulation
                                </BoxText>
                            </td>
                            <td className="p-3">
                                <FaTimesCircle size="1.5rem" color="#BF5249" />
                            </td>
                            <td className="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>


                        <tr className="">
                            <td className="p-3">
                                <BoxText>
                                    Physical Security Attacks
                                </BoxText>
                            </td>
                            <td className="p-3">
                                <FaTimesCircle size="1.5rem" color="#BF5249" />
                            </td>
                            <td className="p-3 ">
                                <FaCheckCircle size="1.5rem" color="#7BBF49" />
                            </td>
                        </tr>


                        <tr className="">
                            <td className="p-3">
                                <BoxText>
                                    Social Engineering
                                </BoxText>
                            </td>
                            <td className="p-3">
                                <FaTimesCircle size="1.5rem" color="#BF5249" />
                            </td>
                            <td className="p-3 ">
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

