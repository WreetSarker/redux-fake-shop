import { SELECTED_PRODUCT, SET_PRODUCTS } from "../actions/shopActionTypes"

const initialState = {
    products: [],
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: return {
            ...state,
            products: action.payload
        }
        case SELECTED_PRODUCT: return {
            ...state,
            ...action.payload
        }
        default: return state;
    }
};