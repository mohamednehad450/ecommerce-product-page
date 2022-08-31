import Image from "next/image"
import { FC } from "react"


const Thumbnail: FC<{
    src: string,
    active?: boolean,
    onClick?: () => void

}> = ({ src, active, onClick }) => {

    return (
        <button onClick={onClick} className={`
            overflow-hidden
            w-[88px] h-[88px]
            flex
            m-4 last:mr-0 first:ml-0
            rounded-xl 
            border-2
            ${active ? 'border-primary-color-1 bg-white' : 'border-transparent hover:opacity-75 '}
        `}
        >
            <Image style={{ opacity: active ? '0.25' : 1 }} src={src} alt="product thumbnail" width={88} height={88} />
        </button>
    )
}

export default Thumbnail