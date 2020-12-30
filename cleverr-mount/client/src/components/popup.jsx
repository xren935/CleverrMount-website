import { Modal, Button } from "react-bootstrap";
import React from "react";
import ReactDOM from 'react-dom';
import "../static/popup.css";
import axios from 'axios';
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            useremail: '',
            emailError: '',
            emailValid: false,
            apiResponse: ""
        };
        
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }
    
    handleClose (){
        this.setState({ show: false });
    };
    
    handleShow (){
        this.setState({ show: true });
    };
    
    saveEmail = (event) => {
        let emailentered = event.target.value;
        console.log(emailentered);
        this.setState({ useremail: emailentered});
    }

    submitForm = (event) => {
        event.preventDefault();
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid = regex.test(String(this.state.useremail).toLowerCase());
        console.log(valid);
        this.setState({ emailValid: valid});
        if(valid){
            alert("thanks for signing up!");
            this.handleClose(); 
        }else{
            alert("email is invalid!");
        }
    }

    // fetch API 
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return(
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <div id="popup">
                    <Modal.Header closeButton>
                        <h3>Sign up with us for 10% off your next purchase!</h3>
                    </Modal.Header>
                    <Modal.Body>
                        <form method="post" action="/">
                            <input type="text" name="useremail" placeholder="Enter your email..." required onChange={this.saveEmail}/>
                            <input type="submit" value="Sign up" style={{marginLeft: "15px"}} onClick={this.submitForm}/>
                        </form>
                    </Modal.Body>
                    </div>
                </Modal>
            </div>
        );
    }
}

ReactDOM.render(<Popup />, document.getElementById('root'));
export default Popup;