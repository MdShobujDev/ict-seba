"use client";
import type { CollapseProps } from "antd";
import type { CSSProperties } from "react";
import Collapses from "../ui/Collapses";

const getItems_1: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: "ওয়েব হোস্টিং কী ?",
    children: (
      <p>
        ওয়েব হোস্টিং একটি পরিষেবা যা আপনার ওয়েবসাইটের ফাইলগুলি সার্ভারে
        সংরক্ষণ করে এবং এগুলোকে অনলাইনে সহজলভ্য করে তোলে। ICT-SEBA আপনাকে দ্রুত,
        নিরাপদ এবং নির্ভরযোগ্য হোস্টিং সমাধান প্রদান করে।
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "কোন কোন ধরনের ওয়েবসাইট হোস্টিং আছে ?",
    children: (
      <p>
        ICT-SEBA বিভিন্ন ধরণের ওয়েব হোস্টিং পরিষেবা প্রদান করে, যার মধ্যে
        রয়েছে VPS হোস্টিং, ডেডিকেটেড হোস্টিং, ক্লাউড হোস্টিং এবং ম্যানেজড
        ওয়ার্ডপ্রেস হোস্টিং। এটি বিভিন্ন প্রয়োজন এবং ওয়েবসাইটের আকার অনুযায়ী
        সেবা প্রদান করে।
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "শেয়ার্ড হোস্টিং কি ?",
    children: (
      <p>
        শেয়ার্ড হোস্টিং হলো একটি ওয়েব হোস্টিং পরিষেবা যেখানে একাধিক ওয়েবসাইট
        একই সার্ভারের সম্পদ ভাগাভাগি করে ব্যবহার করে। এটি ছোট ওয়েবসাইটগুলোর
        জন্য একটি সাশ্রয়ী বিকল্প।
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "রিসেলার হোস্টিং কি ?",
    children: (
      <p>
        রিসেলার হোস্টিং আপনাকে OceanHost থেকে হোস্টিং সম্পদ কিনে তা আপনার
        ব্র্যান্ডের অধীনে ক্লায়েন্টদের কাছে পুনরায় বিক্রি করার সুযোগ দেয়, যা
        আপনার নিজস্ব হোস্টিং পরিষেবা তৈরির পথ সুগম করে।
      </p>
    ),
    style: panelStyle,
  },
];
const getItems_2: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: "VPS হোস্টিং কি ?",
    children: (
      <p>
        VPS (ভার্চুয়াল প্রাইভেট সার্ভার) হোস্টিং আপনার ওয়েবসাইটকে একটি
        সার্ভারের রিসোর্সের একটি নিবেদিত অংশ প্রদান করে, যা শেয়ার্ড হোস্টিংয়ের
        তুলনায় আরও বেশি নিয়ন্ত্রণ, নিরাপত্তা এবং পারফরম্যান্স সরবরাহ করে।
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "ডেডিকেটেড হোস্টিং কি ?",
    children: (
      <p>
        ডেডিকেটেড হোস্টিং আপনার ওয়েবসাইটের জন্য সম্পূর্ণ একটি সার্ভার প্রদান
        করে, যা সর্বাধিক পারফরম্যান্স, নিয়ন্ত্রণ এবং নিরাপত্তা সরবরাহ করে। এটি
        উচ্চ ট্রাফিকযুক্ত বড় আকারের ওয়েবসাইটের জন্য আদর্শ।
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "ক্লাউড হোস্টিং কি ?",
    children: (
      <p>
        ক্লাউড হোস্টিং আপনার ওয়েবসাইট হোস্ট করার জন্য একাধিক আন্তঃসংযুক্ত
        সার্ভার ব্যবহার করে, যা সার্ভারের নেটওয়ার্কের মধ্যে রিসোর্স বিতরণের
        মাধ্যমে উচ্চ নির্ভরযোগ্যতা, স্কেলযোগ্যতা এবং পারফরম্যান্স নিশ্চিত করে।
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "ম্যানেজড ওয়ার্ডপ্রেস হোস্টিং কী ?",
    children: (
      <p>
        ম্যানেজড ওয়ার্ডপ্রেস হোস্টিং একটি বিশেষায়িত পরিষেবা, যেখানে OceanHost
        ওয়ার্ডপ্রেস চালানোর সমস্ত প্রযুক্তিগত দিক পরিচালনা করে, যেমন আপডেট,
        নিরাপত্তা, ব্যাকআপ এবং পারফরম্যান্স অপটিমাইজেশন, ফলে আপনি কেবল কনটেন্টে
        মনোযোগ দিতে পারেন।
      </p>
    ),
    style: panelStyle,
  },
];
function WebHostingCollapse() {
  return (
    <section className=" max-w-7xl mx-auto px-5 py-10">
      <div className="text-center">
        <h1 className=" text-3xl font-medium">
          ওয়েব হোস্টিং সম্পর্কিত প্রশ্ন ও উত্তর
        </h1>
      </div>
      <div className=" flex md:flex-row flex-col justify-between md:gap-5 mt-5">
        <div className=" flex-1 ">
          <Collapses getItems={getItems_1} />
        </div>
        <div className="flex-1 ">
          <Collapses getItems={getItems_2} />
        </div>
      </div>
    </section>
  );
}

export default WebHostingCollapse;
