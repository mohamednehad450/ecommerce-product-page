import { FC, PropsWithChildren } from "react";

interface NavLinkProps {
    title: string
    href: string
}

const NavLink: FC<NavLinkProps> = ({ href, title }) => {
    return (
        <button
            className={`
                m-4 ml-6 border-b-4 border-transparent self-start font-bold hover:text-dark-grayish-blue
                md:my-0 md:mx-4 md:h-full md:text-dark-grayish-blue md:hover:text-dark-blue md:hover:border-primary-color-1 md:font-normal
            `}
        >
            <a href={href}>
                {title}
            </a>
        </button>
    )
}

export default NavLink