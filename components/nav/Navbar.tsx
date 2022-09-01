import { FC, PropsWithChildren, ReactNode, useState } from "react";
import ReactModal from "react-modal";
import { IconClose, IconMenu } from "../icons";



const Navbar: FC<PropsWithChildren<{ logo: ReactNode, actions: ReactNode }>> = ({ children, logo, actions }) => {

    const [opened, setOpened] = useState(false)

    return (
        <nav className="w-100% md:h-28 h-16 flex flex-row items-center border-b-2 top-0 sticky z-10 bg-white">
            <ReactModal
                isOpen={opened}
                onRequestClose={() => setOpened(false)}
                shouldCloseOnEsc
                shouldCloseOnOverlayClick
                overlayClassName={"md:hidden fixed top-0 left-0 w-screen h-screen z-20"}
                style={{
                    overlay: {
                        background: "rgba(0,0,0,75%)",
                    },
                    content:
                    {
                        border: 0,
                        left: 0,
                        top: 0,
                        padding: 0,
                        height: '100vh',
                        width: "70%",
                    }
                }}
            >
                <div className={`bg-white flex flex-col items-start h-full `} >
                    <button
                        onClick={() => setOpened(false)}
                        className="md:hidden p-6 pb-7 flex fill-dark-grayish-blue"
                    >
                        <IconClose />
                    </button>
                    {children}
                </div>
            </ReactModal>
            <button onClick={() => setOpened(true)} className="md:hidden p-6">
                <IconMenu />
            </button>
            <a href="#" className="mr-14">
                {logo}
            </a>
            <span className="h-full hidden md:block">
                {children}
            </span>
            <span className='ml-auto md:mr-0 mx-4 flex flex-row'>
                {actions}
            </span>
        </nav>
    )
}

export default Navbar