import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Products from "../assets/data/Products";

import Cart from "./Cart";
import CoffeeCard from "./CoffeeCard";

import "./Main.css";

const Main = ({ toggle, orderInfo, dispatch }) => {
  return (
    <main>
      <Container>
        {toggle && <Cart orderInfo={orderInfo} dispatch={dispatch} />}

        <Row className="d-flex text-center title">
          <Col className="title">
            <div className="fw-bold fs-1  "> Menu </div>
          </Col>
        </Row>
        <Row>
          {Products.map((item) => (
            <CoffeeCard item={item} key={item.id} dispatch={dispatch} />
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default Main;
