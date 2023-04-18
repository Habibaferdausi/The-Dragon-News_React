import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../page/Shared/QZone";
import BG from "../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h2>Login With</h2>
      <Button className="mb-2" variant="outline-secondary">
        {" "}
        <FaGoogle /> Login with Google
      </Button>{" "}
      <Button variant="outline-success">
        {" "}
        <FaGithub /> Login with Github
      </Button>{" "}
      <div>
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            {" "}
            <FaFacebook />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaTwitter />
            Twitter
          </ListGroup.Item>

          <ListGroup.Item>
            {" "}
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={BG} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
