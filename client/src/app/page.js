import BottomSection from "@/components/container/BottomSection";
import Hero from "@/components/container/Hero";
import SaveSection from "@/components/container/SaveSection";
import SearchSection from "@/components/container/SearchSection";
import ShopSection from "@/components/container/ShopSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SearchSection />
      <SaveSection />
      <ShopSection />
      <BottomSection />
    </>
  );
}
