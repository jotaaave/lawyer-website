import { ArrowUpRight } from "@deemlol/next-icons";
import TextArrow from "./TextArrow";

export default function CompetencyLeft ({ title, description, style }: { title: string, description: string, style?: string }) {
    return (
        <div className={`bg-linear-to-r mb-16 from-[#d5d4bd] via-[#d5d4bd]/60 to-transparent w-90 h-60 hover:scale-110 transition-all ease-in-out duration-300 mt-16 rounded-l-full items-center justify-center flex flex-col ${style}`}>
            <h2 className="text-black text-xl font-bold">{title}</h2>
            <p className="text-gray-600 text-[12px] p-6 text-center">{description}</p>
            <TextArrow>Learn More</TextArrow>
        </div>
    )
}