import Blazing_fast from "@/../public/images/Homepage/blazing_fast.svg";
import Easy_setup from "@/../public/images/Homepage/easy_setup.svg";
import Safe_secure from "@/../public/images/Homepage/safe_secure_img.svg";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";

function AboutHostingSolutions() {
  return (
    <section className=" max-w-7xl mx-auto px-5 my-10">
      {/* title and description  */}
      <div className=" text-center">
        <h1 className=" text-3xl font-medium">
          উন্নতমানের হোস্টিং সমাধানের অভিজ্ঞতা নিন
        </h1>
        <p className=" text-sm text-gray-600">
          সর্বাধুনিক প্রযুক্তি এবং ৭+ বছরের অভিজ্ঞতাকে কাজে লাগিয়ে আপনার অনলাইন
          উপস্থিতি সহজেই বৃদ্ধি করুন
        </p>
      </div>

      <div className=" mt-10 flex flex-col gap-5">
        {/* Effortlessly Scale with Cloud Hosting  */}
        <div className=" flex gap-5 flex-col min-[800px]:flex-row">
          <div className=" bg-cyan-100 rounded-md p-10 w-full">
            <h1 className=" text-2xl font-medium mb-1">
              ক্লাউড হোস্টিং-এর মাধ্যমে সহজেই স্কেল করুন
            </h1>
            <p className=" text-sm text-gray-600 mb-5">
              ক্লাউড হোস্টিং নিরবিচ্ছিন্ন স্কেলিং, উন্নত নিরাপত্তা এবং সর্বোচ্চ
              কর্মক্ষমতার জন্য শক্তিশালী ফিচার প্রদান করে
            </p>
            <ul>
              <li className=" flex gap-2 ">
                <FaCheck className=" text-green-600 mt-1" />
                সর্বোচ্চ কার্যকারিতার জন্য অটো-স্কেলিং
              </li>
              <li className=" flex gap-2 ">
                <FaCheck className=" text-green-600 mt-1" />
                অতুলনীয় নিরাপত্তার জন্য ডেটা রিডান্ড্যান্সি ও ব্যাকআপ
              </li>
              <li className=" flex gap-2 ">
                <FaCheck className=" text-green-600 mt-1" />
                দ্রুত কন্টেন্ট ডেলিভারির জন্য গ্লোবাল CDN ইন্টিগ্রেশন
              </li>
              <li className=" flex gap-2 ">
                <FaCheck className=" text-green-600 mt-1" />
                আপনার ডেটা সুরক্ষায় উন্নত নিরাপত্তা প্রোটোকল
              </li>
            </ul>
            <div className=" mt-5 max-w-max group">
              <Link
                className=" text-blue-600 flex items-center  gap-1"
                href="/cloud-hosting"
              >
                আরও জানুন <FaArrowRightLong />
              </Link>
              <div className=" w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-200 ease-linear"></div>
            </div>
          </div>
          <div className=" bg-cyan-100 rounded-md p-10 flex items-center justify-center">
            <Image
              src={Blazing_fast}
              alt="Blazing_fast"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Secure Your Website with an SSL Certificate */}
        <div className=" flex gap-5 flex-col-reverse min-[800px]:flex-row">
          <div className=" bg-emerald-100 rounded-md p-10 flex items-center justify-center">
            <Image
              src={Safe_secure}
              alt="Safe_secure"
              width={500}
              height={500}
            />
          </div>
          <div className=" bg-emerald-100 rounded-md p-10 w-full">
            <h1 className=" text-2xl font-medium mb-1">
              একটি SSL সার্টিফিকেটের মাধ্যমে আপনার ওয়েবসাইট সুরক্ষিত করুন
            </h1>
            <p className=" text-sm text-gray-600 mb-5">
              একটি SSL সার্টিফিকেট ডেটা সুরক্ষা, SEO উন্নতকরণ এবং নিরাপদ সংযোগের
              মাধ্যমে ব্যবহারকারীর বিশ্বাস বৃদ্ধি করে
            </p>
            <ul>
              <li className=" flex gap-2 ">
                <FaCheck className=" text-green-600 mt-1" />
                উন্নত নিরাপত্তার জন্য ডেটা এনক্রিপশন
              </li>
              <li className=" flex gap-2 ">
                <FaCheck className=" text-green-600 mt-1" />
                উন্নত দৃশ্যমানতার জন্য SEO বুস্ট
              </li>
              <li className=" flex gap-2 ">
                <FaCheck className=" text-green-600 mt-1" />
                HTTPS এবং প্যাডলক দিয়ে বিশ্বাসযোগ্যতা সূচক
              </li>
              <li className=" flex gap-2 ">
                <FaCheck className=" text-green-600 mt-1" />
                শিল্প মান অনুসারে কমপ্লায়েন্স
              </li>
            </ul>
            <div className=" mt-5 max-w-max group">
              <Link
                className=" text-blue-600 flex items-center  gap-1"
                href="/cloud-hosting"
              >
                আরও জানুন <FaArrowRightLong />
              </Link>
              <div className=" w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-200 ease-linear"></div>
            </div>
          </div>
        </div>

        {/* Power Your Website with Reliable Web Hosting */}
        <div className=" flex gap-5 flex-col min-[800px]:flex-row">
          <div className=" bg-indigo-100 rounded-md p-10 w-full">
            <h1 className=" text-2xl font-medium mb-1">
              বিশ্বাসযোগ্য ওয়েব হোস্টিংয়ের মাধ্যমে আপনার ওয়েবসাইট শক্তিশালী
              করুন
            </h1>
            <p className=" text-sm text-gray-600 mb-5">
              ওয়েব হোস্টিং আপনার অনলাইন উপস্থিতি সমর্থন করতে পারফরম্যান্স,
              নিরাপত্তা এবং স্কেলেবিলিটির জন্য একটি মজবুত ভিত্তি প্রদান করে
            </p>
            <ul>
              <li className=" flex gap-2 ">
                <FaCheck className=" text-green-600 mt-1" />
                উচ্চমানের ব্যবহারকারীর অভিজ্ঞতার জন্য দ্রুত লোড সময়
              </li>
              <li className=" flex gap-2 ">
                <FaCheck className=" text-green-600 mt-1" />
                সাইটের প্রবাহ নিশ্চিত করতে ২৪/৭ আপটাইম
              </li>
              <li className=" flex gap-2 ">
                <FaCheck className=" text-green-600 mt-1" />
                আপনার ব্যবসার সাথে বাড়ানোর জন্য স্কেলযোগ্য হোস্টিং
              </li>
              <li className=" flex gap-2 ">
                <FaCheck className=" text-green-600 mt-1" />
                আপনার ডেটা সুরক্ষিত রাখার জন্য শক্তিশালী নিরাপত্তা ফিচার
              </li>
            </ul>
            <div className=" mt-5 max-w-max group">
              <Link
                className=" text-blue-600 flex items-center  gap-1"
                href="/cloud-hosting"
              >
                আরও জানুন <FaArrowRightLong />
              </Link>
              <div className=" w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-200 ease-linear"></div>
            </div>
          </div>
          <div className=" bg-indigo-100 rounded-md p-10 flex items-center justify-center">
            <Image src={Easy_setup} alt="Easy_setup" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHostingSolutions;
