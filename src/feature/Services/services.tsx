import Estatua from "@/../public/ESTATUA.png"
import Image from "next/image"
import CompetencyRight from "./components/CompetencyRight"
import CompetencyUp from "./components/CompetencyUp"
import CompetencyLeft from "./components/CompetencyLeft"
import CompetencyBottom from "./components/CompetencyBottom"

export default function ServiceView() {
    return (
        <section id="services" className="flex relative justify-center bg-[#eee8d6] min-h-screen">
            <CompetencyRight title="Personal Injury" description="Fighting for the compensation you deserve after accidfents injuyriews and unexpexctes ham." style=""/>
            <CompetencyUp title="Personal Injury" description="Fighting for the compensation you deserve after accidfents injuyriews and unexpexctes ham." style="self-end"/>
            <div className="h-full">
                <Image
                    alt="estatua.png"
                    src={Estatua}
                    className="m-auto z-2"
                />
            </div>
            <CompetencyBottom title="Personal Injury" description="Fighting for the compensation you deserve after accidfents injuyriews and unexpexctes ham." />
            <CompetencyLeft title="Personal Injury" description="Fighting for the compensation you deserve after accidfents injuyriews and unexpexctes ham." style="self-end"/>
        </section>
    )
}