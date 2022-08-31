import Image from "next/image";
import { FC, useState } from "react";
import Thumbnail from "./Thumbnail";
import Modal from 'react-modal'
import ImageOverlay from "./ImageOverlay";


const ImageDisplay: FC<{ images: { thumbnail: string, image: string }[] }> = ({ images }) => {

    const [active, setActive] = useState(0)
    const [opened, setOpened] = useState(false)

    return (
        <>
            <button onClick={() => setOpened(true)} className='m-4 flex overflow-hidden rounded-2xl w-max'>
                <Image src={images[active].image} alt="product image" width={448} height={448} />
            </button>
            <div className='m-4 flex flex-row w-[28rem] overflow-x-scroll'>
                <span className="flex flex-row">
                    {images.map((image, i) => (
                        <Thumbnail active={i === active} src={image.thumbnail} onClick={() => setActive(i)} />
                    ))}
                </span>
            </div>
            <Modal
                isOpen={opened}
                onRequestClose={() => setOpened(false)}
                shouldCloseOnEsc
                shouldCloseOnOverlayClick
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
                        justifyContent: 'center'
                    }
                }}
            >
                <ImageOverlay images={images} onClose={() => setOpened(false)} active={active} />
            </Modal>
        </>
    )
}

export default ImageDisplay