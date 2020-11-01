import React from "react";
import { FaAmazon, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../static/App.css";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Form, Button, FormControl } from "react-bootstrap";
import { Modal } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <div class="cover">
        <Navbar bg="light" expand="lg" style={{ width: "100vw", padding: "1em", backgroundColor: "#FF0000" }}>
          <Navbar.Brand href="#home">CleverrMount</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-warning">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div class="hero-image" />
        <div class="hero-text">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <h1><b>Cleverr Mount</b></h1>
                <p>everything you need to mount anything</p>
                <hr></hr>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <ul id="logos">
                  <li>
                    <a href="http://www.google.ca" target="_blank">
                      <FaFacebook className="icons" size="50px" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.amazon.com/Sets-Compact-Bike-Mount-Protector/dp/B083HNJ3T4/ref=sr_1_1?dchild=1&keywords=Cleverr+Mount&qid=1602485019&sr=8-1"
                      target="_blank"
                    >
                      <FaAmazon className="icons" size="50px" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.google.com/search?safe=active&sxsrf=ALeKk023cAnK5TICQZhLr1SBBfrURkf5dg%3A1603408536367&ei=mBKSX4r8Fciw0PEPvp-3wAg&q=bike+mounting+instagram&oq=bike+mounting+instagram&gs_lcp=CgZwc3ktYWIQAzIJCAAQyQMQFhAeOgQIABBHOgcIABDJAxBDOgIIADoFCAAQyQM6BggAEBYQHjoICAAQFhAKEB5QuBJYwx1g_iFoAHACeACAAXeIAdgGkgEDNy4zmAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab&ved=0ahUKEwiKqPWhqsnsAhVIGDQIHb7PDYgQ4dUDCA0&uact=5"
                      target="_blank"
                    >
                      <FaInstagramSquare className="icons" size="50px" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
