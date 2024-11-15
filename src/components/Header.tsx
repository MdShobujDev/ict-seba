"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import Logo from "../../public/images/logo/logo.png";
import HeaderTopBar from "./HeaderTopBar";
import DropDown from "./NavDropdown";

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleClick = () => {
    setIsOpenMenu((pre) => !pre);
  };

  const navItems = [
    { id: 1, name: "Home", redirect: "/" },
    { id: 3, name: "Blog", redirect: "/blog" },
    { id: 4, name: "About", redirect: "/about" },
    { id: 5, name: "Contact Us", redirect: "/contact-us" },
  ];

  return (
    <>
      <header className=" shadow">
        <div className=" border-b">
          <HeaderTopBar />
        </div>
        <nav className=" max-w-7xl mx-auto px-5 py-2 flex items-center justify-between">
          <div className=" flex items-center gap-4">
            <div>
              {" "}
              <Image src={Logo} alt="logo" width={150} height={100} />
            </div>
            <div className=" min-[500px]:block hidden">
              <div>
                <DropDown />
              </div>
            </div>
            <div className=" min-[950px]:block hidden">
              <ul className=" flex items-center gap-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      className="px-3 py-5  font-medium"
                      href={item.redirect}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="min-[950px]:block hidden">
            <div className=" cursor-pointer flex gap-3 items-center text-white bg-primary px-5 py-3 rounded-md font-medium">
              Start learning
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
        <div className=" absolute transition-all duration-200 ease-linear min-[950px]:hidden  bg-white shadow py-2 w-screen flex flex-col items-center gap-8 z-50">
          <div className=" min-[500px]:hidden block">
            <div>
              <DropDown />
            </div>
          </div>
          <ul className=" flex flex-col items-center gap-1 w-full">
            {navItems.map((item) => (
              <Link
                key={item.id}
                onClick={() => setIsOpenMenu((pre) => !pre)}
                className="px-3 text-center py-4 w-full hover:bg-primary/15 transition-all  font-medium"
                href={item.redirect}
              >
                {item.name}
              </Link>
            ))}
          </ul>
          <div className=" max-w-max">
            <div className=" cursor-pointer flex gap-3 items-center text-white bg-primary px-10 py-3 rounded-md font-medium">
              Start learning
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
