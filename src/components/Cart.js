import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Cart.css";
import { BsTrash } from "react-icons/bs";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const Cart = ({ orderInfo, dispatch }) => {
  const add_menu = (item) => {
    const id = item;

    dispatch({ type: "updateToCart", payload: { id } });
  };

  const removeToCart = (item) => {
    const id = item;
    dispatch({ type: "removeToCart", payload: { id } });
  };
  console.log(orderInfo);
  return (
    <div className="orderMain">
      <h1 className="text-center fw-bold">Cart</h1>
      <section className="history">
        <Container>
          <Row>
            <Col>
              {orderInfo.cart?.map((order, index) => (
                <div className="orderTable" key={index}>
                  <div>
                    <img src={order.imgUrl} alt="" />
                  </div>
                  <div>
                    <div className="orderInfo">
                      <p className="text-center fw-bold  fs-5">
                        {order.productName}
                      </p>
                      <p className="subTitle_section">
                        <span className="subtitle">QTY</span>
                        <span className="subtitle">
                          <AiOutlinePlusCircle
                            onClick={() => {
                              add_menu(order);
                            }}
                          />
                          1
                        </span>
                      </p>
                      <p className="subTitle_section">
                        <span className="subtitle">Price</span>
                        <span className="subtitle">${order.price} </span>
                      </p>
                      <p className="d-flex justify-content-end">
                        <BsTrash
                          onClick={() => {
                            removeToCart(order);
                          }}
                        />
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
      <section className="total_info">
        <Container>
          <Row>
            <Col>
              <div>
                <p className="text-center fw-bold fs-1">TOTAl</p>
                <hr />
                <p className="subTitle_section">
                  <span className="subtitle">Total QTY </span>
                  <span className="subTitle_content">{orderInfo.count}</span>
                </p>
                <p className="subTitle_section">
                  <span className="subtitle"> Sub-total</span>
                  <span className="subTitle_content">
                    ${orderInfo.total.toFixed(2)}
                  </span>
                </p>

                <hr />
                <p></p>
                <p className="d-flex justify-content-end">
                  <button>Check out</button>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Cart;
