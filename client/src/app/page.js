
import Hero from "@/components/container/Hero";
import SaveSection from "@/components/container/SaveSection";
import SearchSection from "@/components/container/SearchSection";
import ShopSection from "@/components/container/ShopSection";
import LoginSection from "@/components/container/LoginSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SearchSection />
      <SaveSection />
      <ShopSection />
      <LoginSection />
    </>
  );
}
