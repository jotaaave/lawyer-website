import ButtonTransparent from "../Buttons/ButtonTransparent";
import TextLink from "../Links/TextLink";

import NavLogo from "./components/NavbarLogo";

export default function Navbar() {
    return (
        <nav className="w-full select-none">
            <div className="max-w-7xl mx-auto px-14 flex items-center justify-between py-6">
                
                <NavLogo />

                <div className="flex gap-12">
                    <TextLink href="#home">Home</TextLink>
                    <TextLink href="/">About</TextLink>
                    <TextLink href="#services">Services</TextLink>
                    <TextLink href="/">Contact</TextLink>
                </div>

                <ButtonTransparent>Our Services</ButtonTransparent>

            </div>
        </nav>
    )
}