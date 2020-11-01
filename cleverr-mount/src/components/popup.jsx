import { Modal, Button } from "react-bootstrap";
import React from "react";
import ReactDOM from 'react-dom';
// const emailpopup = function () {
// //   const [show, setShow] = useState(false);

// //   const handleClose = () => setShow(false);
// //   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default emailpopup;
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
            <div>
                {/* <Button variant="primary" onClick={this.handleShow}>Launch modal</Button> */}
                <Modal show={this.state.show} onHide={this.handleClose}>
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
                </Modal>
            </div>
        );
    }
}

ReactDOM.render(<Popup />, document.getElementById('root'));
export default Popup;