import { FC } from "react";


const ProductTitle: FC<{ title: string }> = ({ title }) => {
    return (
        <span className='my-4 text-3xl md:text-5xl font-bold'>
            {title}
        </span>

    )
}


export default ProductTitle