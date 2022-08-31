import { FC } from "react";
import { toDecimal, toPercent } from "../utils";

interface ProductPriceProps {
    price: number
    discount?: number
}

const ProductPrice: FC<ProductPriceProps> = ({ discount, price }) => {

    return (
        <span className="flex flex-row md:flex-col  w-full justify-between items-center md:items-start">
            <span className='mt-4 flex flex-row'>
                <p className='text-3xl font-bold' >
                    ${toDecimal(discount ? price * (1 - discount) : price, 2)}
                </p>
                {discount && (
                    <span className='mx-4 h-8  px-2 font-bold  flex items-center justify-center text-primary-color-1 bg-primary-color-2 rounded-md' >
                        {toPercent(discount)}
                    </span>
                )}
            </span>
            {discount && (
                <p className='text-dark-grayish-blue line-through mt-2' >${toDecimal(price, 2)}</p>
            )}
        </span>
    )
}


export default ProductPrice