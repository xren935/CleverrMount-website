import React from "react";
import { FaAmazon, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../static/App.css";
import Carousel from 'react-bootstrap/Carousel';

const desc =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend erat vel quam porttitor, at lacinia mi convallis. Aliquam sem eros,\
 volutpat sed lectus et, venenatis lacinia erat. Nunc dui ex, efficitur eget vestibulum at, congue quis risus. Donec volutpat porta sapien, in dignissim nisl\
 condimentum at. Vivamus tincidunt sem malesuada orci molestie aliquet. Sed mollis vitae magna id vulputate. Etiam nec leo vel lacus egestas pulvinar. Sed dictum,\
 lacus in tincidunt ultricies, felis odio posuere leo, ac porta odio sem non ex. Etiam interdum vehicula sagittis. Cras vehicula tristique consectetur. Integer ultricies\
 lorem enim, ut viverra nisi fermentum vitae. Duis fermentum euismod erat, in posuere velit condimentum eget. Etiam nisi nulla, gravida sit amet justo ac, suscipit vehicula lorem.";

class Products extends React.Component {
  render() {
    return (
      <div className="products">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1>Our Products</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <h1>Our Products</h1>
              <Carousel>
                <Carousel.Item style={{'height':"500px"}}>
                  <img
                    src="bike.png"
                    className="d-block w-100"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{'height':"500px"}}>
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{'height':"500px"}}>
                  <img
                    className="d-block w-100"
                    src="../static/img/prod1.png"
                    alt="Third slide"
                  />
                  <div class="prod1">hii</div>

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
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
