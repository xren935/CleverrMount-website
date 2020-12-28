import { Modal, Button } from "react-bootstrap";
import React from "react";
import ReactDOM from 'react-dom';
import "../static/popup.css";
import axios from 'axios';

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
    
    submitForm = (event) => {
        event.preventDefault();
        if(this.state.emailValid){
            alert(this.state.useremail);
            // post to database
            // axios.post('/addemail', this.state.useremail)
            //     .then((res) => {
            //         console.log(res.data)
            //     }).catch((error) => {
            //         console.log(error)
            //     });
            
            this.setState({useremail:''})
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
                        <Modal.Title>Enter your email to get 10% off!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form method="post" action="/addemail">
                            <label>Your email: </label>
                            <input type="text" name="useremail" placeholder="Enter your email..." required/>
                            <input type="submit" value="Add Email"/>
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