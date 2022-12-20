import React, { useReducer } from "react";
import { Col } from "react-bootstrap";
import "./CoffeeCard.css";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Products from "../assets/data/Products";

const CoffeeCard = ({ item, dispatch }) => {
  const add_menu = (item) => {
    const id = item;

    dispatch({ type: "addProductToCart", payload: { id } });
  };

  return (
    <Col className="d-flex justify-content-center">
      <div className="d-inline-block test   ">
        <img className="d-block" src={item.imgUrl} alt="" />
        <span className="d-block  d-flex justify-content-center fs-3">
          {item.productName}
        </span>

        <div className=" d-flex justify-content-between   ">
          <span className="fs-5">${item.price}</span>
          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={() => add_menu(item.id)}
          >
            Add
          </motion.button>
        </div>
      </div>
    </Col>
  );
};

export default CoffeeCard;
