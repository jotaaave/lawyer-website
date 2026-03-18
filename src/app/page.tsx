import HomeView from "@/feature/Home/home";
import Navbar from "@/components/Navbar/navbar";
import ServiceView from "@/feature/Services/services";

export default function Home() {
  return (
    <>
    <main className="">
      <HomeView />
      <ServiceView />
    </main>
    </>
  );
}
