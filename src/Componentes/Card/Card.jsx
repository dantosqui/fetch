import "./card.css"
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


{/*card deberia tener los props de tooooda la data de cada usuario */}
const Card = () =>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>

      {/*gracias por el modal bootstrap 😈*/}
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>placeholder{/*nombre persona*/}</Modal.Title>
          </Modal.Header>
          <Modal.Body>placeholder{/*asdasdasd*/}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              cerrar
            </Button>
            
          </Modal.Footer>
        </Modal>

      </>
    );
}

export default Card