import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaSquareWhatsapp,
  FaSquareXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className=" bg-primary text-white">
      <div>
        <div className=" grid min-[950px]:grid-cols-5 grid-cols-2 gap-x-5 gap-y-10 px-5 py-3">
          <div className="col-span-2">
            <h2 className=" text-xl font-medium mb-2">আমাদের সম্পর্কে</h2>
            <p className=" text-sm text-gray-100">
              ICT Seba ওয়েব ডিজাইন, অ্যাপ ডেভেলপমেন্ট, ক্লাউড সফটওয়্যারসহ
              আধুনিক প্রযুক্তি সেবা প্রদানকারী প্রতিষ্ঠান।
            </p>
          </div>
          <div>
            <h2 className=" text-xl font-medium mb-2">গুরুত্বপূর্ণ লিঙ্ক</h2>
            <ul className=" text-sm text-gray-100">
              <li className=" cursor-pointer hover:underline">লগইন</li>
              <li className=" cursor-pointer hover:underline">রেজিস্টার</li>
              <li className=" cursor-pointer hover:underline">
                টার্মস এন্ড কন্ডিশন
              </li>
              <li className=" cursor-pointer hover:underline">
                আমাদের সম্পর্কে
              </li>
              <li className=" cursor-pointer hover:underline">প্রশিক্ষক হন</li>
            </ul>
          </div>
          <div>
            <h2 className=" text-xl font-medium mb-2">জনপ্রিয় সেবা</h2>
            <ul className=" text-sm text-gray-100">
              <li className=" cursor-pointer hover:underline">
                গ্রাফিক্স ডিজাইন
              </li>
              <li className=" cursor-pointer hover:underline">
                কম্পিউটার অফিস অ্যাপ্লিকেশন
              </li>
              <li className=" cursor-pointer hover:underline">
                জন্ম নিবন্ধন আবেদন
              </li>
              <li className=" cursor-pointer hover:underline">
                ওয়েব ডিজাইন এ্যান্ড ডেভেলপমেন্ট
              </li>
              <li className=" cursor-pointer hover:underline">
                রেজাল্ট প্রিন্ট
              </li>
              <li className=" cursor-pointer hover:underline">Print Result</li>
              <li className=" cursor-pointer hover:underline">
                আইডি কার্ড সংশোধন
              </li>
            </ul>
          </div>
          <div>
            <h2 className=" text-xl font-medium mb-2">যোগাযোগ</h2>
            <ul className="text-gray-100">
              <li className="flex items-center gap-1">
                <FaPhone className="text-blue-800" />
                +88 01500000000
              </li>
              <li className="flex items-center gap-1">
                <FaSquareWhatsapp className="text-green-800" />
                +88 01500000000
              </li>
              <li className="flex items-center gap-1">
                <FaEnvelope className="text-orange-700" />
                info@ictseba.com
              </li>
              <li className="flex gap-1">
                <FaLocationDot className="text-blue-800 mt-1.5" />
                Bogura, Zip 0000, Dhaka, Bangladesh
              </li>
            </ul>
            <ul className="flex items-center gap-3 mt-2 text-2xl">
              <li>
                <FaFacebook className="text-blue-800 cursor-pointer transition-all duration-200 ease-linear hover:scale-[.9]" />
              </li>
              <li>
                <FaLinkedin className="text-sky-800 cursor-pointer transition-all duration-200 ease-linear hover:scale-[.9]" />
              </li>
              <li>
                <FaSquareXTwitter className="cursor-pointer transition-all duration-200 ease-linear hover:scale-[.9]" />
              </li>
            </ul>
          </div>
        </div>
        <div className=" text-white border-t w-full border-white text-center py-2">
          <h2>
            &copy; {new Date().getFullYear()} All rights reserved by ICTSEBA
          </h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
