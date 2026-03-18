import Image from "next/image";
import Logo from "@/../public/LAWYER_LOGO.ico"

export default function NavLogo() {
    return (
        <div className="flex gap-2 items-center">
            <Image
                src={Logo}
                alt="logo_navbar"
                width={80}
            />
            <h1 className="text-xl">Law Serv</h1>
        </div>
    )
}