import { FC } from "react";



const ProductDescription: FC<{ description: string }> = ({ description }) => {

    return (
        <p className='md:my-4 text-sm md:text-base text-dark-grayish-blue max-w-[27rem]' >
            {description}
        </p>
    )
}


export default ProductDescription