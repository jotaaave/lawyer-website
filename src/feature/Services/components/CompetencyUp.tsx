import TextArrow from "./TextArrow";

export default function CompetencyUp ({ title, description, style }: { title: string, description: string, style?: string }) {
    return (
        <div className={`bg-linear-to-b from-[#d5d4bd] via-[#d5d4bd]/60 to-transparent w-80 h-70 hover:scale-110 transition-all ease-in-out duration-300 rounded-t-full items-center justify-center flex flex-col ${style}`}>
            <h2 className="text-black text-xl font-bold">{title}</h2>
            <p className="text-gray-600 text-[12px] p-6 text-center">{description}</p>
            <TextArrow>Learn More</TextArrow>
        </div>
    )
}