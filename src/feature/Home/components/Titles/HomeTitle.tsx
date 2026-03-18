export default function HomeTitle(
    { title, subtitle }: { title: string, subtitle: string }
) {
    return (
        <span className="flex items-center gap-4">
            <h1 className="text-6xl">{title}</h1>
            <h1 className="text-6xl italic font-bold underline decoration-2 underline-offset-6">{subtitle}</h1>
        </span>
    )
}