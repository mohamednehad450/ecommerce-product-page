import Image from "next/image";
import { FC, ReactNode } from "react";



const Avatar: FC<{ src: string }> = ({ src }) => {

    return (
        <button className='mx-5 border-2 rounded-full border-transparent hover:border-primary-color-1 w-12 h-12 last:mr-0'>
            <Image src={src} alt="avatar" width={48} height={48} />
        </button>
    )
}


export default Avatar