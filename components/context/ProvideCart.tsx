import { FC, PropsWithChildren } from "react"
import { cartContext, useCartContext } from "./cart"


const ProvideCart: FC<PropsWithChildren> = ({ children }) => {

    const value = useCartContext()

    return (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    )
}


export default ProvideCart