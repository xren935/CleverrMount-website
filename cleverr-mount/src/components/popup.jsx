import { Modal, Button } from "react-bootstrap";
import React from "react";
import ReactDOM from 'react-dom';
import "../static/popup.css";

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
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
    
    render() {
        return(
            <div style={{boarder: "20px red"}}>
                {/* <Button variant="primary" onClick={this.handleShow}>Launch modal</Button> */}
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <div id="popup">
                    <Modal.Header closeButton>
                        <Modal.Title>Connect with us!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>please enter your email here</Modal.Body>
                    <Modal.Body><b>name: </b></Modal.Body>
                    <Modal.Body><b>email: </b></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                        <Button variant="primary">Submit</Button>
                    </Modal.Footer>
                    </div>
                </Modal>
            </div>
        );
    }
}

ReactDOM.render(<Popup />, document.getElementById('root'));
export default Popup;