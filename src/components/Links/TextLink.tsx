import Link from "next/link";

export default function TextLink(
    { children, href, style }: { children: string, href: string, style?: string }
) {
    return (
        <Link href={href}>
            <h2 className={`text-md ${style}`}>{children}</h2>
        </Link>
    )
}