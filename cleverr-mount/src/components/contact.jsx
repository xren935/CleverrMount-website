import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../static/App.css";
import { FaAmazon, FaFacebook, FaInstagramSquare } from "react-icons/fa";

class Contact extends React.Component {
  render() {
    return (
      <div class="contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div id="help">
                <h1>How can we help?</h1>
                <ul>
                  <li>General Product Inquiry</li>
                  <li>Business Collaboration</li>
                  <li>Job Opportunities</li>
                  <li>Sales & Factory Tour Inquiries</li>
                  <li>And More...</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-7" id="contact-form">
              <h3>Contact Us!</h3>
              <form
                class="form-horizontal"
                action="https://formspree.io/f/xrgoqyjn"
                method="POST"
              >
                <fieldset>
                  <div class="form-group">
                    <div class="col-md-12">
                      <input
                        name="name"
                        placeholder="Name"
                        class="form-control"
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-12">
                      <input
                        name="email"
                        placeholder="E-Mail Address"
                        class="form-control"
                        type="text"
                      ></input>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-12 inputGroupContainer">
                      <textarea
                        class="form-control"
                        name="message"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-12">
                      <button
                        type="submit"
                        class="btn btn-secondary pull-right"
                      >
                        Send <span class="glyphicon glyphicon-send"></span>
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
          <div class="row">
            <br />
            <div class="col-md-12" id="bottom-icon">
                  <a href="http://www.google.ca" target="_blank">
                    <FaFacebook size="50px" />
                  </a>
                  <a
                    href="https://www.amazon.com/Sets-Compact-Bike-Mount-Protector/dp/B083HNJ3T4/ref=sr_1_1?dchild=1&keywords=Cleverr+Mount&qid=1602485019&sr=8-1"
                    target="_blank"
                  >
                    <FaAmazon size="50px" />
                  </a>
                  <a
                    href="https://www.google.com/search?safe=active&sxsrf=ALeKk023cAnK5TICQZhLr1SBBfrURkf5dg%3A1603408536367&ei=mBKSX4r8Fciw0PEPvp-3wAg&q=bike+mounting+instagram&oq=bike+mounting+instagram&gs_lcp=CgZwc3ktYWIQAzIJCAAQyQMQFhAeOgQIABBHOgcIABDJAxBDOgIIADoFCAAQyQM6BggAEBYQHjoICAAQFhAKEB5QuBJYwx1g_iFoAHACeACAAXeIAdgGkgEDNy4zmAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab&ved=0ahUKEwiKqPWhqsnsAhVIGDQIHb7PDYgQ4dUDCA0&uact=5"
                    target="_blank"
                  >
                    <FaInstagramSquare size="50px" />
                  </a>  
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
