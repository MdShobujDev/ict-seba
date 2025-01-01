"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import Logo from "../../public/images/logo/logo.png";
import HeaderTopBar from "./HeaderTopBar";
import MobileNav from "./MobileNav";

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleClick = () => {
    setIsOpenMenu((pre) => !pre);
  };
  const handleItemClick = () => {
    setIsOpenMenu((pre) => !pre);
    console.log("first");
  };

  return (
    <>
      <div className=" border-b">
        <HeaderTopBar />
      </div>
      <header className=" sticky top-0 z-50 shadow">
        <nav className="  bg-white max-w-7xl mx-auto px-5 py-2 flex items-center justify-between relative">
          <Link href="/" className=" cursor-pointer">
            <Image src={Logo} alt="logo" width={150} height={100} />
          </Link>
          <div className=" flex items-center gap-4">
            <div className=" min-[950px]:block hidden">
              <ul className=" flex items-center gap-2">
                <li>
                  <Link
                    className="px-3 py-5 hover:text-primary transition-all duration-200 ease-linear font-medium"
                    href="/"
                  >
                    হোম
                  </Link>
                </li>
                <li>
                  <div className=" cursor-pointer px-3 py-5 hover:text-primary transition-all duration-200 ease-linear font-medium">
                    ডোমেইন/হোস্টিং
                  </div>
                </li>
                <li className="group">
                  <div className=" cursor-pointer px-3 py-5 group-hover:text-primary transition-all duration-200 ease-linear font-medium">
                    সফটওয়্যার
                  </div>
                  <div className="hidden group-hover:flex absolute right-0 left-0 bg-primary text-white p-7 items-center justify-between max-w-7xl">
                    <div>
                      <h2 className="text-lg">ব্যবসায়িক সফটওয়্যার</h2>
                      <ul className="flex flex-col text-sm mt-2 ml-2 gap-1">
                        <Link
                          className=" hover:translate-x-1 transition-all ease-linear duration-150"
                          href={"/"}
                        >
                          ক্লাউড বিজনেস সফটওয়্যার
                        </Link>
                        <Link
                          className=" hover:translate-x-1 transition-all ease-linear duration-150"
                          href={"/"}
                        >
                          পস সফটওয়্যার
                        </Link>
                        <Link
                          className=" hover:translate-x-1 transition-all ease-linear duration-150"
                          href={"/"}
                        >
                          হোম সার্ভিস সফটওয়্যার
                        </Link>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-lg">এডুকেশন রিলেটেড সফটওয়্যার</h2>
                      <ul className="flex flex-col text-sm mt-2 ml-2 gap-1">
                        <Link
                          className=" hover:translate-x-1 transition-all ease-linear duration-150"
                          href={"/"}
                        >
                          ক্লাউড বিজনেস সফটওয়্যার
                        </Link>
                        <Link
                          className=" hover:translate-x-1 transition-all ease-linear duration-150"
                          href={"/"}
                        >
                          পস সফটওয়্যার
                        </Link>
                        <Link
                          className=" hover:translate-x-1 transition-all ease-linear duration-150"
                          href={"/"}
                        >
                          হোম সার্ভিস সফটওয়্যার
                        </Link>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-lg">স্বাস্থ্য চিকিৎসা সফটওয়্যার</h2>
                      <ul className="flex flex-col text-sm mt-2 ml-2 gap-1">
                        <li className=" hover:translate-x-1 transition-all ease-linear duration-150">
                          <Link href={"/"}>ক্লাউড বিজনেস সফটওয়্যার</Link>
                        </li>
                        <Link
                          className=" hover:translate-x-1 transition-all ease-linear duration-150"
                          href={"/"}
                        >
                          পস সফটওয়্যার
                        </Link>
                        <Link
                          className=" hover:translate-x-1 transition-all ease-linear duration-150"
                          href={"/"}
                        >
                          হোম সার্ভিস সফটওয়্যার
                        </Link>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-lg">অন্যান্য সফটওয়্যার</h2>
                      <ul className="flex flex-col text-sm mt-2 ml-2 gap-1">
                        <Link
                          className=" hover:translate-x-1 transition-all ease-linear duration-150"
                          href={"/"}
                        >
                          ক্লাউড বিজনেস সফটওয়্যার
                        </Link>
                        <Link
                          className=" hover:translate-x-1 transition-all ease-linear duration-150"
                          href={"/"}
                        >
                          পস সফটওয়্যার
                        </Link>
                        <Link
                          className=" hover:translate-x-1 transition-all ease-linear duration-150"
                          href={"/"}
                        >
                          হোম সার্ভিস সফটওয়্যার
                        </Link>
                      </ul>
                    </div>
                  </div>
                </li>

                <li>
                  <div className=" cursor-pointer px-3 py-5 hover:text-primary transition-all duration-200 ease-linear font-medium">
                    সার্ভিসেস
                  </div>
                </li>
                <li>
                  <div className=" cursor-pointer px-3 py-5 hover:text-primary transition-all duration-200 ease-linear font-medium">
                    কোর্স
                  </div>
                </li>
                <li>
                  <Link
                    className="px-3 py-5 hover:text-primary transition-all duration-200 ease-linear font-medium"
                    href="/"
                  >
                    আমাদের সম্পর্কে
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-3 py-5 hover:text-primary transition-all duration-200 ease-linear font-medium"
                    href="/"
                  >
                    যোগাযোগ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="min-[950px]:hidden block text-2xl cursor-pointer"
            onClick={handleClick}
          >
            {isOpenMenu ? <FaXmark /> : <FaBars />}
          </div>
        </nav>
      </header>
      {isOpenMenu && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: "-100px" }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", ease: "linear", duration: 0.3 }}
          className="sticky top-20 min-[950px]:hidden bg-white shadow py-2 w-full flex flex-col items-center gap-8 z-50"
        >
          <div className="w-full  pr-2">
            <MobileNav handleItemClick={handleItemClick} />
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Header;
