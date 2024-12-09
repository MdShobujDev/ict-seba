import { FaCheck } from "react-icons/fa6";

function Card() {
  return (
    <div>
      <div className=" w-64  rounded-3xl shadow-md shadow-primary overflow-hidden">
        {/* card top section  */}
        <div className=" bg-primary flex flex-col items-center py-6">
          <h3 className=" text-white text-xl">ওয়ার্ডপ্রেস ম্যানেজ হোস্টিং</h3>
          <h1 className=" text-white text-4xl font-bold">৳ 850</h1>
          <p className=" text-white text-sm">মাসিক</p>
        </div>
        {/* card middel section  */}
        <div className=" px-5 pt-8">
          <ul className=" text-sm flex flex-col gap-5">
            <li className=" flex items-center gap-2">
              <span>
                <FaCheck />
              </span>
              <span> 2 ভিসিপিইউ কোর</span>
            </li>
            <li className=" flex items-center gap-2">
              <span>
                <FaCheck />
              </span>
              <span>20 জিবি এসএসডি ডিস্ক</span>
            </li>
            <li className=" flex items-center gap-2">
              <span>
                <FaCheck />
              </span>
              <span>1 টিবি স্থানান্তর*</span>
            </li>
          </ul>
        </div>
        {/* card bottom button section  */}
        <div className="text-center px-5 py-8">
          <button className="bg-primary text-white font-medium px-5 py-2 rounded-3xl hover:shadow-md shadow-purple-600 transition-all ease-linear duration-150">
            সকল প্যাকেজ দেখুন
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
