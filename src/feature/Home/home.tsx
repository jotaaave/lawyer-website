import BackgroundChanger from "@/feature/Home/components/BackgroundChanger";
import HomeTitle from "./components/Titles/HomeTitle";
import ButtonTransparent from "@/components/Buttons/ButtonTransparent";
import TextLink from "@/components/Links/TextLink";
import Navbar from "@/components/Navbar/navbar";

export default function HomeView() {
    return (
        <section id="home" className="relative w-full select-none min-h-screen">
            <BackgroundChanger />
            <Navbar />
            
            <div className="max-w-7xl mx-auto px-14 h-full">
                <div className="flex flex-col justify-end min-h-[70vh]">
                    
                    <HomeTitle title="Trusted" subtitle="Legal."/>
                    <HomeTitle title="Protecting Your" subtitle="Rights."/>
                    <HomeTitle title="Committed to" subtitle="Justice."/>

                    <p className="max-w-xl mt-6 text-lg text-gray-300">
                        Providing reliable legal services with professionalism, experience, and dedication to every client.
                    </p>

                    <span className="flex items-center gap-6">
                        <ButtonTransparent style="w-40 mt-4">Our Services</ButtonTransparent>
                        <TextLink href="/" style="mt-4">Learn More</TextLink>
                    </span>
                </div>
            </div>
        </section>
    )
}