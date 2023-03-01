import { CartState } from './'

type CartActionType = { type: '[Cart] - LoadCart from cookies | storage' }

export const cartReducer = (state: CartState, action: CartActionType) => {
    switch (action.type) {
        case '[Cart] - LoadCart from cookies | storage':
            return {
                ...state
            }

        default:
            return state
    }
}
