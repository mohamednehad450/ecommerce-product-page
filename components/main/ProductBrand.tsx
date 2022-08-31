import { FC } from "react";



const ProductBrand: FC<{ title: string }> = ({ title }) => {

    return (
        <span className='my-4 text-primary-color-1 font-bold'>
            {title}
        </span>
    )
}


export default ProductBrand