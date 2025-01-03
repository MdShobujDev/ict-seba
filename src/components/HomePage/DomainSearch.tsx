import AWS_Banner from "@/../public/images/Homepage/AWS-banner.jpg";
import { TbCurrencyTaka } from "react-icons/tb";

function DomainSearch() {
  return (
    <section className=" max-w-7xl mx-auto px-5 text-white">
      <div
        className=" w-full bg-cover bg-center bg-no-repeat rounded-md overflow-hidden "
        style={{
          backgroundImage: `url(${AWS_Banner.src})`,
        }}
      >
        <div className=" bg-black/30 backdrop-blur-sm py-10 px-5">
          <div className=" text-center">
            <h1 className=" text-3xl font-medium">
              আপনার ব্যবসার জন্য সেরা ডোমেইন নাম নির্বাচন করুন
            </h1>
            <p className=" text-xs">
              আপনার ব্যবসার প্রয়োজন অনুযায়ী সাজানো আমাদের বিশাল শীর্ষ-স্তরের
              ডোমেইন এক্সটেনশনের সংগ্রহ থেকে বেছে নিন এবং অনলাইনে একটি শক্তিশালী
              উপস্থিতি নিশ্চিত করুন।
            </p>
          </div>

          <div className=" flex justify-center mt-10">
            <input
              type="text"
              placeholder="ডোমেইন নাম লিখুন"
              className=" w-1/2 p-4 rounded-l-md outline-none text-black"
            />
            <button className=" bg-blue-500 p-4 rounded-r-md">
              সার্চ করুন
            </button>
          </div>
          <div className=" flex justify-center mt-10 space-x-3">
            <div className=" flex flex-col items-center border-r sm:px-5 px-3">
              <span>.com</span>
              <span className=" flex items-center">
                <TbCurrencyTaka />
                850
              </span>
            </div>
            <div className=" flex flex-col items-center border-r sm:px-5 px-3">
              <span>.net</span>
              <span className=" flex items-center">
                <TbCurrencyTaka />
                1100
              </span>
            </div>
            <div className=" flex flex-col items-center border-r sm:px-5 px-3">
              <span>.pro</span>
              <span className=" flex items-center">
                <TbCurrencyTaka />
                1300
              </span>
            </div>
            <div className=" flex flex-col items-center sm:px-5 px-3">
              <span>.org</span>
              <span className=" flex items-center">
                <TbCurrencyTaka />
                1100
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DomainSearch;
