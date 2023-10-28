import { useState } from "react";
import { Button } from "react-bootstrap";
import ModalColorPick from "../ModalColorPick/ModalColorPick";

const ButtonColorPick = () => {

    //Color inicial del botón
    const [buttonColor, setButtonColor] = useState("#3d7c40");

    //Manejo del modal
    const [showModal, setShowModal] = useState(false);

    //Función para cambiar el color del botón
    const handleColorChange = (color: string) => {
        setButtonColor(color);
    }

    //Función al hacer click en el botón se muestra el modal
    const handleShowModal = () => {
        setShowModal(true);
    }

  return (
    <div className="m-3">
        <h2>Ejemplo 3</h2>

        {/* Componente Padre */}

        <Button variant="primary" style={{backgroundColor: buttonColor}}
        onClick={handleShowModal}> Cambiar Color </Button>

        {/* Componente Hijo */}

        {showModal && <ModalColorPick 
        show ={showModal} 
        onHide={() => setShowModal(false)}
        handleColorChange={handleColorChange}/>}

    </div>
  )
}

export default ButtonColorPick
