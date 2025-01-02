import Banner from "@/components/HomePage/Banner";
import CategoryCards from "@/components/HomePage/CategoryCards";
import DomainSearch from "@/components/HomePage/DomainSearch";
import HeroCarousel from "@/components/HomePage/HeroCarousel";
import Reviews from "@/components/HomePage/Reviews";
import ServicesTab from "@/components/HomePage/ServicesTab";
import WebHostingCollapse from "@/components/HomePage/WebHostingCollapse";
// import Card from "@/components/PricingCard/Card";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <ServicesTab />
      <CategoryCards />
      <Banner />
      {/* <div className="flex justify-center gap-5 my-10 px-5 mx-auto w-full ">
        <Card />
        <Card />
        <Card />
      </div> */}
      <DomainSearch />
      <Reviews />
      <WebHostingCollapse />
    </div>
  );
}
