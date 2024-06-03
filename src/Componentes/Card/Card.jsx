import "./card.css"
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


{/*card deberia tener los props de tooooda la data de cada usuario */}
const Card = (props) =>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>

      {/*gracias por el modal bootstrap 😈*/}

        <h6>{props.nameCompleto}</h6>
        <Button variant="primary" onClick={handleShow}>
          mas informacion
        </Button>
          <img src={props.foto} alt="foto" />
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>{props.nameCompleto}</Modal.Title>
          </Modal.Header>
          <Modal.Body><img src={props.fotoperogrande}></img>email: {props.email} <br/> username: {props.username} <br /> domicilio: {props.address} <br /> pais (en ingles) : {props.country} </Modal.Body>
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