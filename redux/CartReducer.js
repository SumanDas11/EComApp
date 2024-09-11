import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: 'cart',
    initialState: { cart: [] },
    reducers: {
        addToCart: (state, action) => {
            const itemPresent = state.cart.find((item) => item.id == action.payload.id); // check if item is present in the cart
            if (itemPresent) {
                itemPresent.quantity++;
            }
            else {
                state.cart.push({ ...action.payload, quantity: 1 }) //push the item with quantity=1
            }
        },
        removeFromCart: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload.id); //filter out the item in cart
            state.cart = removeItem;
        },
        incrementQuantity: (state, action) => {
            const itemPresent = state.cart.find((item) => item.id == action.payload.id); // check if item is present in the cart
            itemPresent.quantity++;
        },
        decrementQuantity: (state, action) => {
            const itemPresent = state.cart.find((item) => item.id == action.payload.id); // check if item is present in the cart
            if (itemPresent.quantity == 1) {
                const removeItem = state.cart.filter((item) => item.id !== action.payload.id); //filter out the item in cart
                state.cart = removeItem;
            } else {
                itemPresent.quantity--;
            }
        },
        cleanCart: (state) => {
            state.cart = [];
        }
    }
})

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, cleanCart } = CartSlice.actions;
export default CartSlice.reducer;