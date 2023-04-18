import React from "react";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src="../../../logo.png" alt="" />
        <p className="text-secondary mt-2">
          <small>Journalism without Fear or Favour</small>
        </p>
        <p className="text-secondary">{moment().format("LLLL")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={50}>
          I can be react
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
