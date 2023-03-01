import { FC, useReducer } from 'react'
import { CartContext, cartReducer } from '.'
import { ICartProduct } from '../../interfaces'

export interface CartState {
    cart: ICartProduct[]
}

const Cart_INITIAL_STATE: CartState = {
    cart: []
}

export const CartProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, Cart_INITIAL_STATE)

    return (
        <CartContext.Provider
            value={{
                ...state
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
