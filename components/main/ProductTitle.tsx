import { FC } from "react";


const ProductTitle: FC<{ title: string }> = ({ title }) => {
    return (
        <span className='md:my-4 my-2 text-2xl md:text-5xl font-bold'>
            {title}
        </span>

    )
}


export default ProductTitle