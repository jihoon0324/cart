import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineShop } from "react-icons/ai";
import { motion } from "framer-motion";
import "./Header.css";
const Header = ({ toggle, setToggle, orderInfo }) => {
  return (
    <header>
      <Container>
        <Row>
          <Col lg="8" className="d-flex  align-items-center fw-bold fs-1">
            <div>Coffee</div>
          </Col>
          <Col
            lg="4"
            className="d-flex justify-content-end  align-items-center  fw-bold "
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <motion.span
              className="fs-1 "
              style={{ color: "red" }}
              whileTap={{ scale: 1.2 }}
            >
              <AiOutlineShop />
            </motion.span>
            <motion.span className="badge" whileDrag={{ scale: 1.2 }}>
              {orderInfo.count}
            </motion.span>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
