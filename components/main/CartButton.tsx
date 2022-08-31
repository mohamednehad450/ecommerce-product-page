import { FC } from "react"
import { useCart } from "../context"
import { IconCart } from "../icons"



const CartButton: FC<{ onClick: () => void, }> = ({ onClick }) => {

    const cart = useCart()
    const count = cart?.list.reduce((acc, p) => acc + p.quantity, 0)
    return (
        <button onClick={onClick} className='mx-5 text-dark-grayish-blue hover:text-dark-blue last:mr-0 hover:opacity-70'>
            {count ? (
                <span className="absolute bg-primary-color-1 px-[6px] text-light-grayish-blue rounded-full text-xs -translate-y-2 " >{count} </span>
            ) : null}
            <IconCart />
        </button>
    )
}


export default CartButton