import React from "react";
import { FaAmazon, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../static/App.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { Product1 } from "../static/img/prod1.png";

class Products extends React.Component {
  render() {
    return (
      <div className="products">
        <div class="container">
          <div class="row">
            <div class="col-md-12"></div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <h1>Our Products</h1>
              <Carousel interval={500} pauseOnHover={true} className="z-depth-1">
                <Carousel.Item style={{ height: "500px" }}>
                  <div class="row">
                    <div class="col-md-8">
                      <Card id="prod-one">
                        <img
                          src={require("../static/img/prod1.png")}
                          className="d-block w-100"
                          alt="First slide"
                        />
                      </Card>
                      </div>
                    </div>
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      May put item name/descriptoin/link here.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "500px" }}>
                  <div class="row">
                    <div class="col-md-8">
                      <Card id="prod-one">
                        <img
                          src={require("../static/img/prod2.png")}
                          className="d-block w-100"
                          alt="First slide"
                        />
                      </Card>
                    </div>
                  </div>
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      May put item name/descriptoin/link here.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "500px" }}>
                  <div class="row">
                    <div class="col-md-8">
                      <Card id="prod-one">
                        <img
                          src={require("../static/img/prod3.png")}
                          className="d-block w-100"
                          alt="First slide"
                        />
                      </Card>
                    </div>
                  </div>
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      May put item name/descriptoin/link here.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "500px" }}>
                  <div class="row">
                    <div class="col-md-8">
                      <Card id="prod-one">
                        <img
                          src={require("../static/img/prod4.png")}
                          className="d-block w-100"
                          alt="First slide"
                        />
                      </Card>
                    </div>
                    {/* <div class="col-md-4">
                      <h3>Item Description / Link to Item etc.</h3>
                    </div> */}
                  </div>
                  <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>
                      May put item name/descriptoin/link here.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "500px" }}>
                  <div class="row">
                    <div class="col-md-8">
                      <Card id="prod-one">
                        <img
                          src={require("../static/img/prod5.png")}
                          className="d-block w-100"
                          alt="First slide"
                        />
                      </Card>
                    </div>
                    {/* <div class="col-md-4">
                      <h3>Item Description / Link to Item etc.</h3>
                    </div> */}
                  </div>
                  <Carousel.Caption>
                    <h3>Fifth slide label</h3>
                    <p>
                      May put item name/descriptoin/link here. 
                      May add more products after this slide.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
