import { FC, PropsWithChildren } from "react";

interface NavLinkProps {
    title: string
    href: string
}

const NavLink: FC<NavLinkProps> = ({ href, title }) => {
    return (
        <button className="mx-4 h-full text-dark-grayish-blue hover:text-dark-blue border-b-4 border-transparent hover:border-primary-color-1" >
            <a href={href}>
                {title}
            </a>
        </button>
    )
}

export default NavLink