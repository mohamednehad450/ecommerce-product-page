import { FC } from "react";
import { toDecimal, toPercent } from "../utils";

interface ProductPriceProps {
    price: number
    discount?: number
}

const ProductPrice: FC<ProductPriceProps> = ({ discount, price }) => {

    return (
        <span className="flex flex-row md:flex-col  w-full justify-between items-center md:items-start">
            <span className='mt-4 flex flex-row items-center'>
                <p className='md:text-3xl text-2xl font-bold' >
                    ${toDecimal(discount ? price * (1 - discount) : price, 2)}
                </p>
                {discount && (
                    <span className='mx-4 md:h-8 h-6 md:text-base text-sm px-2 font-bold flex items-center justify-center text-primary-color-1 bg-primary-color-2 rounded-md' >
                        {toPercent(discount)}
                    </span>
                )}
            </span>
            {discount && (
                <p className='text-dark-grayish-blue line-through mt-2 ' >${toDecimal(price, 2)}</p>
            )}
        </span>
    )
}


export default ProductPrice