"use client";
import { Tabs, TabsProps } from "antd";
import Image from "next/image";
import React from "react";

const ServicesTab: React.FC = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "জনপ্রিয় সেবা",
      children: PopularServices(),
    },
    {
      key: "2",
      label: "নতুন সেবা",
      children: newServices(),
    },
    {
      key: "3",
      label: "মোবাইল সেবা",
      children: mobileServices(),
    },
    {
      key: "4",
      label: "দপ্তর ভিত্তিক সেবা",
      children: dobtorServices(),
    },
    {
      key: "5",
      label: "সকল ই-সেবা",
      children: EServices(),
    },
  ];
  return (
    <div className="max-w-7xl mx-auto w-full px-5 py-4">
      <Tabs defaultActiveKey="1" size="large" type="card" items={items} />
    </div>
  );
};

export default ServicesTab;

import Admission from "@/../public/images/Services/Admission.png";
import Application from "@/../public/images/Services/Application.png";
import BirthRegistration from "@/../public/images/Services/BirthRegistration.png";
import Certificate from "@/../public/images/Services/Certificate.png";
import COA from "@/../public/images/Services/COA.png";
import ComputerCompose from "@/../public/images/Services/ComputerCompose.png";
import ComputerPrint from "@/../public/images/Services/ComputerPrint.png";
import EmailServices from "@/../public/images/Services/EmailServices.png";
import GraphicsD from "@/../public/images/Services/GraphicsD.png";
import ICT from "@/../public/images/Services/ICT.png";
import IDCard from "@/../public/images/Services/IDCard.png";
import Photostat from "@/../public/images/Services/Photostat.png";
import Printresult from "@/../public/images/Services/Printresult.png";
import Scanning from "@/../public/images/Services/Scanning.png";
import WebDesign from "@/../public/images/Services/WebDesign.png";
import styled from "styled-components";
// import ICT from "@/../public/images/Services/ICT.png";
const PopularServices = () => {
  return (
    <div className=" grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-8 w-full">
      <Item>
        <Image src={ICT} alt="ict" width={60} />
        তথ্য ও যোগাযোগ প্রযুক্তি ( HSC )
      </Item>
      <Item>
        <Image src={COA} alt="COA" width={60} />
        কম্পিউটার অফিস অ্যাপ্লিকেশন
      </Item>
      <Item>
        <Image src={GraphicsD} alt="GraphicsD" width={60} />
        গ্রাফিক্স ডিজাইন
      </Item>
      <Item>
        <Image src={Printresult} alt="Printresult" width={60} />
        রেজাল্ট প্রিন্ট
      </Item>
      <Item>
        <Image src={ComputerPrint} alt="ComputerPrint" width={60} />
        কম্পিউটার প্রিন্ট
      </Item>
      <Item>
        <Image src={Application} alt="Application" width={60} />
        চাকরির আবেদন
      </Item>
      <Item>
        <Image src={EmailServices} alt="EmailServices" width={60} />
        ইমেইল সেবা
      </Item>
      <Item>
        <Image src={BirthRegistration} alt="BirthRegistration" width={60} />
        জন্ম নিবন্ধন আবেদন
      </Item>
    </div>
  );
};
const newServices = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-10 w-full">
      <Item>
        <Image src={WebDesign} alt="WebDesign" width={60} />
        ওয়েব ডিজাইন এ্যান্ড ডেভেলপমেন্ট
      </Item>
      <Item>
        <Image src={Printresult} alt="Printresult" width={60} />
        রেজাল্ট প্রিন্ট
      </Item>
      <Item>
        <Image src={ComputerCompose} alt="ComputerCompose" width={60} />
        কম্পিউটার কম্পোজ
      </Item>
      <Item>
        <Image src={Certificate} alt="Certificate" width={60} />ই টিন
        সার্টিফিকেট
      </Item>
      <Item>
        <Image src={EmailServices} alt="EmailServices" width={60} />
        ইমেইল সেবা
      </Item>
      <Item>
        <Image src={IDCard} alt="IDCard" width={60} />
        আইডি কার্ড সংশোধন
      </Item>
    </div>
  );
};
const mobileServices = () => {
  return (
    <div className=" grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-10 w-full">
      <Item>
        <Image src={EmailServices} alt="EmailServices" width={60} />
        ইমেইল সেবা
      </Item>
      <Item>
        <Image src={Printresult} alt="Printresult" width={60} />
        রেজাল্ট প্রিন্ট
      </Item>
      <Item>
        <Image src={ComputerCompose} alt="ComputerCompose" width={60} />
        কম্পিউটার কম্পোজ
      </Item>
      <Item>
        <Image src={Certificate} alt="Certificate" width={60} />ই টিন
        সার্টিফিকেট
      </Item>
      <Item>
        <Image src={EmailServices} alt="EmailServices" width={60} />
        ইমেইল সেবা
      </Item>
      <Item>
        <Image src={IDCard} alt="IDCard" width={60} />
        আইডি কার্ড সংশোধন
      </Item>
      <Item>
        <Image src={Printresult} alt="Printresult" width={60} />
        রেজাল্ট প্রিন্ট
      </Item>
      <Item>
        <Image src={ComputerCompose} alt="ComputerCompose" width={60} />
        কম্পিউটার কম্পোজ
      </Item>
    </div>
  );
};
const dobtorServices = () => {
  return (
    <div className=" grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-10 w-full">
      <Item>
        <Image src={Scanning} alt="Scanning" width={60} />
        স্ক্যান ও লিমিনেটিং
      </Item>
      <Item>
        <Image src={Printresult} alt="Printresult" width={60} />
        রেজাল্ট প্রিন্ট
      </Item>
      <Item>
        <Image src={ComputerCompose} alt="ComputerCompose" width={60} />
        কম্পিউটার কম্পোজ
      </Item>
      <Item>
        <Image src={Certificate} alt="Certificate" width={60} />ই টিন
        সার্টিফিকেট
      </Item>
      <Item>
        <Image src={EmailServices} alt="EmailServices" width={60} />
        ইমেইল সেবা
      </Item>
      <Item>
        <Image src={IDCard} alt="IDCard" width={60} />
        আইডি কার্ড সংশোধন
      </Item>
    </div>
  );
};
const EServices = () => {
  return (
    <div className=" grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-10 w-full">
      <Item>
        <Image src={Admission} alt="Admission" width={60} />
        ভর্তি আবেদন
      </Item>
      <Item>
        <Image src={Printresult} alt="Printresult" width={60} />
        রেজাল্ট প্রিন্ট
      </Item>
      <Item>
        <Image src={Photostat} alt="Photostat" width={60} />
        ফটোস্ট্যাট
      </Item>
      <Item>
        <Image src={Certificate} alt="Certificate" width={60} />ই টিন
        সার্টিফিকেট
      </Item>
      <Item>
        <Image src={EmailServices} alt="EmailServices" width={60} />
        ইমেইল সেবা
      </Item>
      <Item>
        <Image src={IDCard} alt="IDCard" width={60} />
        আইডি কার্ড সংশোধন
      </Item>
    </div>
  );
};

const Item = styled.div`
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #f3f4f6;
  padding: 5px;
  border-radius: 0.375rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
