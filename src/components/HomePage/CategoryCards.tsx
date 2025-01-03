import Bandwidth from "@/../public/images/Homepage/CategoryCard/bandwidth.png";
import CloudServer from "@/../public/images/Homepage/CategoryCard/cloud-server.png";
import DataSever from "@/../public/images/Homepage/CategoryCard/data-server.png";
import VPS from "@/../public/images/Homepage/CategoryCard/vps.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

interface CardItem {
  id: number;
  title: string;
  description: string;
  price: string;
  link: string;
  logo: StaticImageData;
  bgColor: string;
}
const cardItems: CardItem[] = [
  {
    id: 1,
    title: "ওয়েব হোস্টিং",
    description: "২৪/৭ সাপোর্টসহ নির্ভরযোগ্য ওয়েব হোস্টিং",
    price: "299",
    link: "#",
    logo: CloudServer,
    bgColor: "#d1fae5",
  },
  {
    id: 2,
    title: "লিনাক্স VPS",
    description: "রুট অ্যাক্সেসসহ 10G সিকিউর লিনাক্স VPS",
    price: "899",
    link: "#",
    logo: VPS,
    bgColor: "#cffafe",
  },
  {
    id: 3,
    title: "উইন্ডোজ VPS",
    description: "পূর্ণ নিয়ন্ত্রণসহ 10G উইন্ডোজ VPS",
    price: "999",
    link: "#",
    logo: Bandwidth,
    bgColor: "#fef3c7",
  },
  {
    id: 4,
    title: "ডেডিকেটেড সার্ভার",
    description: "সাশ্রয়ী ও উচ্চ কার্যক্ষমতার ডেডিকেটেড সার্ভার",
    price: "5999",
    link: "#",
    logo: DataSever,
    bgColor: "#ffe4e6",
  },
];

const CategoryCards: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-10">
      <div className="text-center">
        <h2 className=" text-3xl font-medium">
          এখনই সহজেই আপনার অনলাইন ব্যবসা শুরু করুন
        </h2>
        <p className=" text-sm">
          বিশ্বাসযোগ্য এবং শক্তিশালী পারফরম্যান্সের সাথে ৯৯% আপটাইমের অভিজ্ঞতা
          নিন
        </p>
      </div>
      <div className=" mt-5 grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] gap-5 w-full">
        {cardItems.map((card) => (
          <Link
            href={card.link}
            key={card.id}
            className="flex flex-col items-center gap-4 px-3 py-8 rounded-lg shadow-md w-full hover:-translate-y-2 transition-all duration-300 ease-linear cursor-pointer group text-center"
            style={{ backgroundColor: card.bgColor }}
          >
            <div>
              <Image src={card.logo} alt="logo" width={50} />
            </div>
            <h2 className=" text-2xl font-medium mt-2">{card.title}</h2>
            <p className=" text-sm">{card.description}</p>
            <>
              <p className=" font-light">Starting at</p>
              <div className=" flex gap-1">
                <span className="text-lg">
                  <TbCurrencyTaka />
                </span>
                <h1 className=" text-4xl font-bold">{card.price}</h1>
                <span className=" self-end">/mo</span>
              </div>
            </>
            <div className=" mt-3 cursor-pointer group-hover:text-primary  transition-all underline underline-offset-4 text-blue-600">
              আরো জানুন
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryCards;
