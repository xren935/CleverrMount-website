import React from "react";
import { FaAmazon, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/header.css";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Spring } from "react-spring/renderprops";
import Aos from "aos";
import "aos/dist/aos.css";

class Header extends React.Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      dropdownIsOpen: false,
    };
  }

  toggle(menuItem) {
    this.setState({ [menuItem]: !this.state[menuItem] })
  }

  onMouseEnter(menuItem) {
    this.setState({ [menuItem]: true })
  }

  onMouseLeave(menuItem) {
    this.setState({ [menuItem]: false })
  }

  render() {
    Aos.init({interval: 20000});
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {(props) => (
        <div style={props}>
          <Navbar className="customized-nav" expand="lg" style={{ position: "fixed", width: "100vw", padding: "1em" }}>
          <Navbar.Brand href="#home">CleverrMount</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown" onMouseOver={this.onMouseEnter.bind(this, 'dropdownIsOpen')} onMouseLeave={this.onMouseLeave.bind(this, 'dropdownIsOpen')} show={this.state.dropdownIsOpen} toggle={this.toggle.bind(this, 'dropdownIsOpen')}>
                <NavDropdown.Item href="#action/3.1" id="btn-link">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" id="btn-link">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item id="btn-link" href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item id="btn-link" href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div class="cover">
            <div class="hero-image" />
            <div class="hero-text">
              <div class="container" id="header-container">
                <div class="row" data-aos="zoom-in">
                  <div class="col-lg-12">
                    {/* <img src={logo}></img> */}
                    <h1><b>Cleverr Mount</b></h1>
                    <p>GET HOOKED</p>
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
          </div>
      )}
    </Spring>
    );
  }
}

export default Header;
