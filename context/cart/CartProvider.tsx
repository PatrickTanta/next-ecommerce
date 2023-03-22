import { FC, useReducer, useEffect } from 'react'
import { CartContext, cartReducer } from '.'
import { ICartProduct } from '../../interfaces'
import Cookies from 'js-cookie'

export interface CartState {
    cart: ICartProduct[]
}

const Cart_INITIAL_STATE: CartState = {
    cart: []
}

export const CartProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, Cart_INITIAL_STATE)

    useEffect(() => {
        try {
            const cookieProducts = Cookies.get('cart')
                ? JSON.parse(Cookies.get('cart')!)
                : []
            dispatch({
                type: '[Cart] - LoadCart from cookies | storage',
                payload: cookieProducts
            })
        } catch (e) {
            dispatch({
                type: '[Cart] - LoadCart from cookies | storage',
                payload: []
            })
        }
    }, [])

    useEffect(() => {
        Cookies.set('cart', JSON.stringify(state.cart))
    }, [state.cart])

    const addProductToCart = (product: ICartProduct) => {
        const productInCart = state.cart.some((p) => p._id === product._id)

        if (!productInCart)
            return dispatch({
                type: '[Cart] - Update products in cart',
                payload: [...state.cart, product]
            })

        const productInCartButDifferentSize = state.cart.some(
            (p) => p._id === product._id && p.size === product.size
        )

        if (!productInCartButDifferentSize)
            return dispatch({
                type: '[Cart] - Update products in cart',
                payload: [...state.cart, product]
            })

        const updatedProducts = state.cart.map((p) => {
            if (p._id !== product._id) return p
            if (p.size !== product.size) return p

            p.quantity += product.quantity
            return p
        })

        dispatch({
            type: '[Cart] - Update products in cart',
            payload: [...updatedProducts]
        })
    }

    return (
        <CartContext.Provider
            value={{
                ...state,
                addProductToCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
