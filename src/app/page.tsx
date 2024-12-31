import Collapses from "@/components/HomePage/Collapses";
import HeroCarousel from "@/components/HomePage/HeroCarousel";
import Reviews from "@/components/HomePage/Reviews";
import ServicesTab from "@/components/HomePage/ServicesTab";
// import Card from "@/components/PricingCard/Card";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <ServicesTab />
      {/* <div className="flex justify-center gap-5 my-10 px-5 mx-auto w-full ">
        <Card />
        <Card />
        <Card />
      </div> */}
      <Reviews />
      <Collapses />
    </div>
  );
}
