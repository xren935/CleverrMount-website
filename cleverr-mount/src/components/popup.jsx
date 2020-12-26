import { Modal, Button } from "react-bootstrap";
import React from "react";
import ReactDOM from 'react-dom';
import "../static/popup.css";

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            useremail: '',
            emailError: '',
            emailValid: false
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
    
    submitForm = (event) => {
        event.preventDefault();
        if(this.state.emailValid){
            alert(this.state.useremail);
        }else{
            alert("email is invalid!");
        }
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.emailError;
        let emailValid = this.state.emailValid;
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors = emailValid ? '' : ' is invalid';
        this.setState({emailError: fieldValidationErrors, emailValid: emailValid});
    }

    setUserEmail = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        // this.setState({[nam]: val});
        this.setState({[name]: value}, 
            () => { this.validateField(name, value)});
    }

    render() {
        return(
            <div>
                {/* <Button variant="primary" onClick={this.handleShow}>Launch modal</Button> */}
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <div id="popup">
                    <Modal.Header closeButton>
                        <Modal.Title>Enter your email to get 10% off!</Modal.Title>
                    </Modal.Header>
                    <form>
                    <Modal.Body>
                        <label>
                            Your Email: 
                            <input id="email-inputbox" type="text" name="useremail" onChange={this.setUserEmail}/>
                        </label>
                        <br></br>
                        <input id="submit-btn" type="submit" value="Get 10% Off" onClick={this.submitForm}/>
                    </Modal.Body>
                    </form>
                    </div>
                </Modal>
            </div>
        );
    }
}

ReactDOM.render(<Popup />, document.getElementById('root'));
export default Popup;