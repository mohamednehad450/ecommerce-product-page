import Image from "next/image"
import { FC } from "react"
import { useCart } from "../context"
import { IconDelete } from "../icons"
import { toDecimal, useOutsideAlerter } from "../utils"




const CartOverlay: FC<{ onClose: () => void }> = ({ onClose }) => {

    const ref = useOutsideAlerter(onClose)

    const cart = useCart()

    return (
        <span ref={ref} className="flex flex-col min-h-[16rem] w-[22rem]">
            <p className='font-black text-lg p-6 text-left border-b'>
                Cart
            </p>
            {cart?.list.length ? (
                <>
                    {cart.list.map(({ product, quantity }) => (
                        <span className="flex flex-row flex-nowrap ">
                            <span className="m-4 w-[50px] h-[50px] rounded-md overflow-hidden">
                                <Image src={product.images[0].thumbnail} width={50} height={50} />
                            </span>
                            <span className="flex flex-col m-4 ml-0">
                                <span className="text-dark-grayish-blue">
                                    {product.name}
                                </span>
                                <span>
                                    <span className="text-dark-grayish-blue">
                                        ${toDecimal(product.price * (1 - (product.discount || 0)), 2)} x {quantity}
                                    </span>
                                    <span className="pl-2 text-dark-blue">
                                        ${toDecimal(product.price * (1 - (product.discount || 0)) * quantity, 2)}
                                    </span>
                                </span>

                            </span>
                            <button onClick={(e) => { cart.remove(product.id); e.preventDefault() }}>
                                <IconDelete />
                            </button>
                        </span>))}
                    <button className='bg-primary-color-1 hover:opacity-70 h-14 m-4 font-bold rounded-md text-light-grayish-blue flex flex-row items-center justify-center'>
                        Checkout
                    </button>
                </>
            ) : (
                <span className='flex-grow grid items-center h-full'>
                    <p className='m-auto'>
                        Your Cart is Empty
                    </p>
                </span>
            )}
        </span>
    )

}



export default CartOverlay