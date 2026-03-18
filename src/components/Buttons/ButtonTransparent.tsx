export default function ButtonTransparent ({ children, style }: { children: string, style?: string }) {
    return (
        <button className={`cursor-pointer border px-6 py-2 rounded-full ${style}`}>
            {children}
        </button>
    )
}