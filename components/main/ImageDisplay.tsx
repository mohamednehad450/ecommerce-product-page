import Image from "next/image";
import { FC, useEffect, useState } from "react";
import Thumbnail from "./Thumbnail";
import Modal from 'react-modal'
import ImageOverlay from "./ImageOverlay";
import { IconNext, IconPrevious } from "../icons";

const md = 768
const ImageDisplay: FC<{ images: { thumbnail: string, image: string }[] }> = ({ images }) => {

    const [active, setActive] = useState(0)
    const [opened, setOpened] = useState(false)

    const [dim, setDim] = useState({
        width: 448,
        height: 448,
    })

    useEffect(() => {
        function handleWidth() {
            if (window.innerWidth >= md) {
                setDim({ width: 448, height: 448 })
            } else {
                setDim({ width: window.innerWidth, height: 0.8 * window.innerWidth })
                setOpened(false)
            }
        }
        window.addEventListener('resize', handleWidth)
        handleWidth()
        return () => {
            window.removeEventListener('resize', handleWidth)
        }
    }, [])


    const next = (a: number) => (a + 1) % images.length
    const previous = (a: number) => a === 0 ? (images.length - 1) : (a - 1)
    return (
        <>
            <button onClick={() => setOpened(true)} className='md:m-4 flex overflow-hidden md:rounded-2xl w-screen md:w-max cursor-default md:cursor-pointer'>
                <Image src={images[active].image} alt="product image" width={dim.width} height={dim.height} />
            </button>
            <button
                onClick={() => setActive(next)}
                style={{
                    transform: `translate(0, calc(${dim.height / 2}px - 50%))`
                }}
                className={`
                        absolute right-4 md:hidden 
                        w-10 h-10 grid place-content-center rounded-full
                        hover:stroke-primary-color-1  stroke-dark-blue bg-light-grayish-blue
                    `}
            >
                <IconNext width={14} height={14} />
            </button>
            <button
                style={{
                    transform: `translate(0, calc(${dim.height / 2}px - 50%))`
                }}
                onClick={() => setActive(previous)}
                className={`
                        absolute left-4 md:hidden
                        rounded-full w-10 h-10 grid place-content-center
                        hover:stroke-primary-color-1 stroke-dark-blue bg-light-grayish-blue
                    `}
            >
                <IconPrevious width={14} height={14} />
            </button>
            <div className='hidden m-4 md:flex flex-row w-[28rem] overflow-x-scroll'>
                <span className="flex flex-row">
                    {images.map((image, i) => (
                        <Thumbnail key={i} active={i === active} src={image.thumbnail} onClick={() => setActive(i)} />
                    ))}
                </span>
            </div>
            <Modal
                isOpen={opened}
                onRequestClose={() => setOpened(false)}
                shouldCloseOnEsc
                shouldCloseOnOverlayClick
                overlayClassName={"hidden md:block md:fixed top-0 left-0 w-screen h-screen z-20"}
                style={{
                    overlay: {
                        background: "rgba(0,0,0,75%)"
                    },
                    content:
                    {
                        background: 'transparent',
                        border: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }
                }}
            >
                <ImageOverlay images={images} onClose={() => setOpened(false)} active={active} />
            </Modal>
        </>
    )
}

export default ImageDisplay