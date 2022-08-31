import { createContext, useContext, useState } from "react"


interface Product {

    id: number
    brand: string
    name: string
    description: string
    images: {
        thumbnail: string
        image: string
    }[]
    price: number
    discount?: number

}


interface CartContext {
    list: { product: Product, quantity: number }[]
    addToCart: (product: Product, quantity: number) => void
    remove: (id: Product['id']) => void
}

const cartContext = createContext<CartContext | undefined>(undefined)


const useCart = () => useContext(cartContext)



const useCartContext = (): CartContext => {

    const [list, setCart] = useState<{ product: Product, quantity: number }[]>([])

    const addToCart = (product: Product, quantity: number) => {
        if (quantity < 1) return

        const oldItem = list.find(({ product: { id } }) => id === product.id)
        if (oldItem) {
            setCart(list.map(i =>
                i.product.id === oldItem.product.id ?
                    { product, quantity: quantity + oldItem.quantity } :
                    i))
        }
        else {
            setCart(c => [...c, { quantity, product }])
        }
    }

    const remove = (id: Product['id']) => setCart(list => list.filter(({ product }) => id !== product.id))


    return {
        list,
        addToCart,
        remove,
    }
}


export {
    cartContext,
    useCart,
    useCartContext,
}
export type { Product }

