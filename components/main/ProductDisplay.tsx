import { FC, useState } from "react";
import { Product, useCart } from "../context";
import { IconCart } from "../icons";
import Counter from "./Counter";
import ImageDisplay from "./ImageDisplay";
import ProductBrand from "./ProductBrand";
import ProductDescription from "./ProductDescription";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";

interface ProductProps {
    product: Product
}


const ProductDisplay: FC<ProductProps> = ({ product }) => {
    const { images, name, description, brand, discount, price } = product
    const [count, setCount] = useState(0)
    const cart = useCart()

    return (
        <>
            <div className='md:my-16 lg:m-16 flex flex-col flex-1 items-end'>
                <ImageDisplay images={images} />
            </div>
            <div className='md:my-16 lg:m-16 md:mt-32 m-6 flex flex-col flex-1 items-start'>
                <ProductBrand title={brand} />
                <ProductTitle title={name} />
                <ProductDescription description={description} />
                <ProductPrice price={price} discount={discount} />
                <span className='flex flex-col md:flex-row w-full md:w-auto  pt-4'>
                    <Counter value={count} onChange={setCount} />
                    <button
                        onClick={() => { cart?.addToCart(product, count); setCount(0) }}
                        className='bg-primary-color-1 hover:opacity-70 md:w-[17rem] h-14 my-2 md:m-4 font-bold rounded-md text-light-grayish-blue flex flex-row items-center justify-center'
                    >
                        <span className='px-4 fill-light-grayish-blue'>
                            <IconCart />
                        </span>
                        Add to cart
                    </button>
                </span>
            </div>
        </>
    )
}


export default ProductDisplay