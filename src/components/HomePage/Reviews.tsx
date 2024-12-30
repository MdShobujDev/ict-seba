"use client";
import { FaStar } from "react-icons/fa6";
import EmblaCarousel from "../EmblaCarouse";

function Reviews() {
  return (
    <section className=" max-w-7xl mx-auto overflow-hidden flex min-[950px]:flex-row flex-col px-5 py-8 gap-5">
      <div className=" flex flex-col items-center ">
        <h1 className=" text-3xl">
          {`১০০০-এর বেশি ব্যবসা প্রতিষ্ঠান আইসিটি-সেবা’র উপর আস্থা রাখে অতুলনীয়
          আইটি সমাধানের জন্য`}
        </h1>
        <p className=" text-xs mt-2 text-gray-700">
          {`আইসিটি-সেবা একটি বিশ্বস্ত ওয়েব হোস্টিং প্রদানকারী, যা সারা বিশ্বে
          ১০০০-এর বেশি গ্রাহককে সেবা প্রদান করছে। আমাদের বিশেষজ্ঞ দল ২৪/৭
          সময়জুড়ে প্রস্তুত, আপনার ব্যবসার প্রয়োজন মেটাতে ব্যক্তিগতকৃত সাপোর্ট
          এবং আইটি সমাধান প্রদান করতে`}
        </p>
      </div>
      {/* Reviews section  */}
      <div className=" min-[950px]:w-2/5 w-full">
        <EmblaCarousel>
          <div className=" w-full min-[950px]:flex-[0_0_85%] min-[600px]:flex-[0_0_60%] flex-[0_0_90%] bg-primary/20  rounded-lg shadow p-4">
            <div className=" flex items-start justify-between">
              <div className=" flex items-start gap-2">
                <div className=" bg-gray-300 w-14 h-14 rounded-full"></div>
                <div>
                  <h2 className=" font-medium">Jone Doe</h2>
                  <p className=" text-xs font-medium">24 Feb, 2024</p>
                </div>
              </div>
              <div className=" flex items-center gap-2 text-orange-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <p className=" text-sm italic mt-2">
              {`"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              aliquam voluptate nostrum excepturi minima est debitis
              perferendis?"`}
            </p>
          </div>

          <div className="w-full min-[950px]:flex-[0_0_85%] min-[600px]:flex-[0_0_60%] flex-[0_0_90%] bg-primary/20  rounded-lg shadow p-4">
            <div className=" flex items-start justify-between">
              <div className=" flex items-start gap-2">
                <div className=" bg-gray-300 w-14 h-14 rounded-full"></div>
                <div>
                  <h2 className=" font-medium">Jone Doe</h2>
                  <p className=" text-xs font-medium">24 Feb, 2024</p>
                </div>
              </div>
              <div className=" flex items-center gap-2 text-orange-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <p className=" text-sm italic mt-2">
              {`"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              aliquam voluptate nostrum excepturi minima est debitis
              perferendis?"`}
            </p>
          </div>

          <div className=" w-full min-[950px]:flex-[0_0_85%] min-[600px]:flex-[0_0_60%] flex-[0_0_90%] bg-primary/20 rounded-lg shadow p-4">
            <div className=" flex items-start justify-between">
              <div className=" flex items-start gap-2">
                <div className=" bg-gray-300 w-14 h-14 rounded-full"></div>
                <div>
                  <h2 className=" font-medium">Jone Doe</h2>
                  <p className=" text-xs font-medium">24 Feb, 2024</p>
                </div>
              </div>
              <div className=" flex items-center gap-2 text-orange-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <p className=" text-sm italic mt-2">
              {`"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              aliquam voluptate nostrum excepturi minima est debitis
              perferendis?"`}
            </p>
          </div>
        </EmblaCarousel>
      </div>
    </section>
  );
}

export default Reviews;
