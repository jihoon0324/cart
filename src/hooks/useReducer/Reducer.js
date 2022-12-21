import { useState } from "react";
import Products from "../../assets/data/Products";

export const initialState = {
  count: 0,
  cart: [],

  total: 0,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "addProductToCart": {
      const id = action.payload;
      console.log(id, "addProductToCart");
      const newOrder = Products.filter((addOrder) => {
        return addOrder.id === id.id;
      });

      const newOrderList = {
        id: id.id,
        productName: newOrder[0].productName,
        imgUrl: newOrder[0].imgUrl,
        price: newOrder[0].price,
        quantity: 0,
      };
      const checkInArray = state.cart.findIndex((item) => item.id === id.id);

      const addToCart =
        checkInArray < 0 ? [...state.cart, newOrderList] : [...state.cart];

      const updatedItemIndex = addToCart.findIndex((item) => item.id === id.id);

      if (updatedItemIndex < 0) {
        addToCart.push({ ...state.cart, quantity: 1 });
      } else {
        const updatedItem = {
          ...addToCart[updatedItemIndex],
        };
        updatedItem.quantity++;
        addToCart[updatedItemIndex] = updatedItem;
      }

      return {
        count: state.count + 1,
        total: state.total + newOrderList.price,
        cart: addToCart,
      };
    }
    case "updateToCart": {
      const id = action.payload;
      console.log(id, "update.id");
      const updatedCart = [...state.cart];
      const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === id.id.id
      );
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...state.cart, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex],
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }

      return {
        count: state.count + 1,
        total: state.total + action.payload.id.price,
        cart: updatedCart,
        // cart: [...state.cart, qty : state.cart.qty+1],
      };
    }
    case "removeEachToCart": {
      const id = action.payload;
      console.log(id, "update.id");
      const updatedCart = [...state.cart];

      if (updatedCart[0].quantity > 0) {
        const updatedItemIndex = updatedCart.findIndex(
          (item) => item.id === id.id.id
        );
        if (updatedItemIndex < 0) {
          updatedCart.push({ ...state.cart, quantity: -1 });
        } else {
          const updatedItem = {
            ...updatedCart[updatedItemIndex],
          };

          updatedItem.quantity--;
          updatedCart[updatedItemIndex] = updatedItem;
        }

        return {
          count: state.count - 1,
          total: state.total - action.payload.id.price,
          cart: updatedCart,
        };
      }
      return {
        count: state.count,
        total: state.total,
        cart: updatedCart,
      };
    }

    case "removeToCart":
      return {
        count: state.count - action.payload.id.quantity,
        total:
          state.total - action.payload.id.price * action.payload.id.quantity,
        cart: state.cart.filter((remove) => remove.id !== action.payload.id.id),
      };
    default:
      return state;
  }
};

export default Reducer;
