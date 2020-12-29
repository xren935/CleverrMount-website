import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spring } from "react-spring/renderprops";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "../static/App.css";
import "../static/about.css";

const desc = "Whether you are  exploring the spectacular nature of the great outdoors or traveling the world with family and friends, \
we all have a passion for enjoying a fantastic bike ride. At Cleverr Mount, we give your bikes a place to be stowed away freely and without \
compromise when you are ready to hang them up.";
const desc1 = "At Cleverr Mount, we share your desire to spend more time enjoying your bike rides – which means less time worrying about where you could store \
your bikes on a safe and sturdy bike mount. As a relatively new company, we are super excited about how our customers feel and think about our product.";
const desc2 = "t Cleverr Mount we continue to strive to hear from the community of users so we can constantly improve our products. This has been creating solutions to \
simplify life’s adventures. Our focus has been totally focused on developing smart, stylish products that are environmentally sound, high quality, safe, and \
easy to use. All so you can safely store your bikes which matters to you the most. \
Whatever your destination, whatever your path."
const desc3 = "Wherever you ́re riding, whatever you ́re hanging. \n With Cleverr Mount, you're free to live your active life to the fullest."

class About extends React.Component {
render(){
    Aos.init({interval: 20000});
    return (
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
        <div style={props}>
            <div class="about">
                <div class="container">
                    <div class="row">
                        {/* <div class="col-lg-8">
                            <div class="about-text">
                                <h1>This is Cleverr Mount</h1>
                                <p>{desc}</p>
                                <p>{desc1}</p>
                                <p>{desc2}</p>
                                <p><b>{desc3}</b></p>
                            </div>
                        </div> */}
                        <div class="col-lg-5" data-aos="fade-right">
                            <div class="about-img"></div>
                        </div>
                        <div class="col-lg-7" data-aos="fade-left" data-aos-duration="800" data-aos-delay="300">
                            <div class="about-text">
                                <h1>This is Cleverr Mount</h1>
                                <p>{desc}</p>
                                <p>{desc1}</p>
                                <p>{desc2}</p>
                                <p><b>{desc3}</b></p>
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

export default About;
