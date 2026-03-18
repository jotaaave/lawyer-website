import Image from "next/image";
import homeGround1 from '@/../public/HOME_GROUND_1.jpg'
import homeGround2 from '@/../public/HOME_GROUND_2.jpg'

export default function BackgroundChanger() {
    return (
        <Image
            alt="background_img"
            fill={true}
            src={homeGround2}
            className="z-[-1] relative"
        />
    )
}