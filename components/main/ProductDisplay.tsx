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
            <div className='md:m-16  flex flex-col flex-1 items-end'>
                <ImageDisplay images={images} />
            </div>
            <div className='m-16 mt-32 flex flex-col flex-1 items-start'>
                <ProductBrand title={brand} />
                <ProductTitle title={name} />
                <ProductDescription description={description} />
                <ProductPrice price={price} discount={discount} />
                <span className='flex flex-row pt-4'>
                    <Counter value={count} onChange={setCount} />
                    <button
                        onClick={() => { cart?.addToCart(product, count); setCount(0) }}
                        className='bg-primary-color-1 hover:opacity-70 w-[17rem] h-14 m-2 font-bold rounded-md text-light-grayish-blue flex flex-row items-center justify-center'
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