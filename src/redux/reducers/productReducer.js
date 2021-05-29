import { SET_PRODUCTS } from "../actions/shopActionTypes"

const initialState = {
    products: [{
        id: 1,
        title: 'Wreet',
        category: 'Programmer'
    }],
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: return {
            state
        }
        default: return state;
    }
};