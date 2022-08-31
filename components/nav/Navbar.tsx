import Image from "next/image";
import { FC, PropsWithChildren, ReactNode } from "react";
import { IconCart } from "../icons";



const Navbar: FC<PropsWithChildren<{ logo: ReactNode, actions: ReactNode }>> = ({ children, logo, actions }) => {


    return (
        <nav className="w-100% h-28 flex flex-row items-center border-b-2">
            <a href="#" className="mr-14">
                {logo}
            </a>
            {children}
            <span className='ml-auto flex flex-row'>
                {actions}
            </span>
        </nav>
    )
}

export default Navbar