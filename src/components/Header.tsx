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

  const navItems = [
    { id: 1, name: "হোম", redirect: "/" },
    { id: 3, name: "কোর্স ", redirect: "/blog" },
    { id: 4, name: "ডোমেইন/হোস্টিং", redirect: "/about" },
    { id: 5, name: "সফটওয়্যার", redirect: "/contact-us" },
    { id: 6, name: "ই-প্রিন্টিং", redirect: "/contact-us" },
    { id: 7, name: "সার্ভিসেস", redirect: "/contact-us" },
    { id: 8, name: "আমাদের সম্পর্কে", redirect: "/contact-us" },
    { id: 9, name: "যোগাযোগ", redirect: "/contact-us" },
  ];

  return (
    <>
      <div className=" border-b">
        <HeaderTopBar />
      </div>
      <header className=" sticky top-0 z-50 shadow">
        <nav className="  bg-white shadow max-w-7xl mx-auto px-5 py-2 flex items-center justify-between">
          <Link href="/" className=" cursor-pointer">
            <Image src={Logo} alt="logo" width={150} height={100} />
          </Link>
          {/* <div className=" min-[500px]:block hidden">
              <div>
                <DropDown />
              </div>
            </div> */}
          <div className=" flex items-center gap-4">
            <div className=" min-[950px]:block hidden">
              <ul className=" flex items-center gap-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      className="px-3 py-5 hover:text-primary transition-all duration-200 ease-linear font-medium"
                      href={item.redirect}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="min-[950px]:block hidden">
              <div className=" cursor-pointer flex gap-3 items-center text-white bg-primary px-5 py-3 rounded-md font-medium">
                শেখা শুরু করুন
              </div>
            </div> */}
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
          <div className="w-full px-4">
            <div className=" cursor-pointer text-center text-white bg-primary px-10 py-3 rounded-md font-medium">
              শেখা শুরু করুন
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Header;
