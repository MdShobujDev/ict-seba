import Banner_Bg from "@/../public/images/banner_bg.jpg";
import Link from "next/link";
import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="  max-w-7xl mx-auto px-5 py-2 ">
      <div
        className="  text-white  rounded-lg overflow-hidden text-center bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${Banner_Bg.src})` }}
      >
        <div className=" bg-black/40 backdrop-blur p-10 ">
          <h1 className=" text-3xl font-medium">
            আপনার জন্য কোন হোস্টিং প্ল্যানটি সঠিক তা নিশ্চিত নন?
          </h1>
          <p className=" mb-10 text-sm">
            আমাদের দ্রুত এবং উন্নত সাপোর্ট টিম সর্বদা আপনাকে সাহায্য করতে
            প্রস্তুত
          </p>
          <Link
            className=" bg-primary/90 hover:bg-primary transition-all  py-2 px-3 rounded-lg"
            href="/contact"
          >
            যোগাযোগ করুন
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
