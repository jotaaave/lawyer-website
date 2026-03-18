import { ArrowUpRight } from "@deemlol/next-icons";
import Link from "next/link";

export default function TextArrow({ children, href }: { children: string, href?: string }) {
    return (
        <span className="flex gap-2">
                <Link href={href || "/"} className="text-black font-bold">{children}</Link>
                <div className="bg-black rounded-full">
                    <ArrowUpRight size={24} color="#FFFFFF"/>
                </div>
        </span>
    )
}