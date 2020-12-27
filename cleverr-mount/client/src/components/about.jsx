import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../static/App.css";

const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend erat vel quam porttitor, at lacinia mi convallis. Aliquam sem eros,\
 volutpat sed lectus et, venenatis lacinia erat. Nunc dui ex, efficitur eget vestibulum at, congue quis risus. Donec volutpat porta sapien, in dignissim nisl\
 condimentum at. Vivamus tincidunt sem malesuada orci molestie aliquet. Sed mollis vitae magna id vulputate. Etiam nec leo vel lacus egestas pulvinar. Sed dictum,\
 lacus in tincidunt ultricies, felis odio posuere leo, ac porta odio sem non ex. Etiam interdum vehicula sagittis. Cras vehicula tristique consectetur. Integer ultricies\
 lorem enim, ut viverra nisi fermentum vitae. Duis fermentum euismod erat, in posuere velit condimentum eget. Etiam nisi nulla, gravida sit amet justo ac, suscipit vehicula lorem."

class About extends React.Component {
  render() {
    return (
        <div class="about" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <h1>About Us</h1>
                        <p>{desc}</p>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-img"></div>
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <div class="col-lg-6">
                        <span class="badge badge-primary">Bicycle</span>
                        <span class="badge badge-secondary">Mounting Equipments</span>
                        <span class="badge badge-info">TV Wall Mount</span>
                        <span class="badge badge-warning">Bike Rack Garage Wall Mount</span>
                        <span class="badge badge-danger">Dream TV Mount</span>
                        <span class="badge badge-primary">Bike Hook</span>
                        <span class="badge badge-success">USX Mount</span>
                        <span class="badge badge-info">TV Mount</span>
                        <span class="badge badge-light">Forging Mount</span>
                        <span class="badge badge-danger">Dream UL</span>
                        <span class="badge badge-info">These Are</span>
                        <span class="badge badge-light">Some Tags</span>
                        <span class="badge badge-danger">Showing</span>
                        <span class="badge badge-primary">The Products</span>
                        <span class="badge badge-secondary">You Have :)</span>
                        <span class="badge badge-warning">These Are</span>
                        <span class="badge badge-dark">Some Tags</span>
                        <span class="badge badge-light">Showing</span>
                        <span class="badge badge-success">The Products</span>
                        <span class="badge badge-info">You Have :)</span>
                        <span class="badge badge-primary">Bicycle</span>
                        <span class="badge badge-secondary">Mounting Equipments</span>
                        <span class="badge badge-info">TV Wall Mount</span>
                        <span class="badge badge-warning">Bike Rack Garage Wall Mount</span>
                        <span class="badge badge-danger">Dream TV Mount</span>
                        <span class="badge badge-primary">Bike Hook</span>
                        <span class="badge badge-success">USX Mount</span>
                        <span class="badge badge-info">TV Mount</span>
                    </div>
                    <div class="col-lg-6">
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default About;
