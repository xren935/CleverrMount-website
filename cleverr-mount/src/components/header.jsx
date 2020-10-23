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
              <a href="https://www.google.com/search?safe=active&sxsrf=ALeKk023cAnK5TICQZhLr1SBBfrURkf5dg%3A1603408536367&ei=mBKSX4r8Fciw0PEPvp-3wAg&q=bike+mounting+instagram&oq=bike+mounting+instagram&gs_lcp=CgZwc3ktYWIQAzIJCAAQyQMQFhAeOgQIABBHOgcIABDJAxBDOgIIADoFCAAQyQM6BggAEBYQHjoICAAQFhAKEB5QuBJYwx1g_iFoAHACeACAAXeIAdgGkgEDNy4zmAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab&ved=0ahUKEwiKqPWhqsnsAhVIGDQIHb7PDYgQ4dUDCA0&uact=5" target="_blank">
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
