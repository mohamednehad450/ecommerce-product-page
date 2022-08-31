import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { IconClose, IconNext, IconPrevious } from "../icons";
import Thumbnail from "./Thumbnail";




const ImageOverlay: FC<{
    images: { thumbnail: string, image: string }[]
    onClose: () => void,
    active?: number
}> = ({ images, onClose, active: a }) => {

    const [active, setActive] = useState(a || 0)

    const next = (a: number) => (a + 1) % images.length
    const previous = (a: number) => a === 0 ? (images.length - 1) : (a - 1)
    useEffect(() => {
        const keyHandler = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") setActive(next)
            if (e.key === "ArrowLeft") setActive(previous)
        }
        document.addEventListener('keydown', keyHandler)
        return () => {
            document.removeEventListener('keydown', keyHandler)
        }
    }, [])



    return (
        <div className="flex flex-col">
            <button onClick={onClose} className="ml-auto m-4 fill-light-grayish-blue hover:fill-primary-color-1" >
                <IconClose width={28} height={28} />
            </button>
            <div className="w-[564px] h-[564px] ">
                <span className='m-4 flex overflow-hidden rounded-2xl w-[550px] h-[550px]'>
                    <Image src={images[active].image} alt="product image" width={550} height={550} />
                </span>
                <button
                    onClick={() => setActive(next)}
                    className={`
                        relative top-[-50%] right-[-100%] translate-x-[-50%] translate-y-[-50%]
                        w-14 h-14 grid place-content-center rounded-full
                        hover:stroke-primary-color-1  stroke-dark-blue bg-light-grayish-blue
                    `}
                >
                    <IconNext width={36} />
                </button>
                <button
                    onClick={() => setActive(previous)}
                    className={`
                        relative top-[-50%] right-0 translate-x-[-25%] translate-y-[-150%]
                        rounded-full w-14 h-14 grid place-content-center
                        hover:stroke-primary-color-1 stroke-dark-blue bg-light-grayish-blue
                    `}
                >
                    <IconPrevious width={36} />
                </button>
            </div>
            <div className='m-8 mx-16 flex flex-row w-[28rem] overflow-x-scroll'>
                <span className="flex flex-row">
                    {images.map((image, i) => (
                        <Thumbnail active={i === active} src={image.thumbnail} onClick={() => setActive(i)} />
                    ))}
                </span>
            </div>
        </div >
    )
}

export default ImageOverlay