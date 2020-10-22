import React from "react";
import { FaAmazon, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../static/App.css";

// function header() {
//   return (
//     <div class="cover">
//       <div class="hero-image"/>
//       <div class="hero-text">
//         <h1>Cleverr Mount</h1>
//         <p>everything you need to mount anything</p>
//         <hr></hr>
//         <ul>
//           <li><a href="http://www.google.ca" target="_blank"><FaFacebook className="icons" size="50px"/></a></li>
//           <li><a href="https://www.amazon.com/Sets-Compact-Bike-Mount-Protector/dp/B083HNJ3T4/ref=sr_1_1?dchild=1&keywords=Cleverr+Mount&qid=1602485019&sr=8-1" target="_blank"><FaAmazon className="icons" size="50px"/></a></li>
//           <li><a href="" target="_blank"><FaInstagramSquare className="icons" size="50px"/></a></li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Header;
class Header extends React.Component {
  render() {
    return (
      <div class="cover">
        <div class="hero-image" />
        <div class="hero-text">
          <h1>Cleverr Mount</h1>
          <p>everything you need to mount anything</p>
          <hr></hr>
          <ul>
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
              <a href="" target="_blank">
                <FaInstagramSquare className="icons" size="50px" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Header;
