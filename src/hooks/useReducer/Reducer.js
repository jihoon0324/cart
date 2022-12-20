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

      const newOrder = Products.filter((addOrder) => {
        return addOrder.id === id.id;
      });
      const date = new Date();
      const time = date.getMilliseconds() + date.getMilliseconds();

      const newOrderList = {
        id: id,
        tiemId: time * time,
        productName: newOrder[0].productName,
        imgUrl: newOrder[0].imgUrl,
        price: newOrder[0].price,
      };

      return {
        count: state.count + 1,
        total: state.total + newOrderList.price,
        cart: [...state.cart, newOrderList],
      };
    }
    case "updateToCart": {
      const date = new Date();
      const time = date.getMilliseconds() * date.getMilliseconds();

      const newOrderList = {
        id: action.payload.id.id,
        tiemId: time * time,
        productName: action.payload.id.productName,
        imgUrl: action.payload.id.imgUrl,
        price: action.payload.id.price,
      };

      return {
        count: state.count + 1,
        total: state.total + action.payload.id.price,
        cart: [...state.cart, newOrderList],
      };
    }
    case "removeToCart":
      return {
        count: state.count - 1,
        total: state.total - action.payload.id.price,
        cart: state.cart.filter(
          (remove) => remove.tiemId !== action.payload.id.tiemId
        ),
      };
    default:
      return state;
  }
};

export default Reducer;
