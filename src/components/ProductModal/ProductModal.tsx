import { Modal, Form, Button } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";
import { Product } from "../../types/Product";



//Dependencias para validar formularios
import * as Yup from "yup";
import { useFormik } from "formik";
import { ProductService } from "../../services/ProductService";

//Notificaciones al usuario
import { toast } from "react-toastify";


type productModalProps = {
  show: boolean;
  onHide: () => void;
  title: string;
  modalType: ModalType;
  prod: Product;
  refreshData: React.Dispatch<React.SetStateAction<boolean>>;

}

const ProductModal = ({ show, onHide, title, modalType, prod, refreshData }: productModalProps) => {

  //CREATE - ACTUALIZAR
  const handleSaveUpdate = async (pro: Product) => {
    try {
      const isNew = prod.id === 0;
      if (isNew) {
        await ProductService.createProduct(pro);

      } else {
        await ProductService.updateProduct(pro.id, pro);
      }

      toast.success(isNew ? "Producto Creado" : "Producto Actualizado",{
        position: "top-center",
      });

      onHide();

      refreshData(prevState => !prevState);

    } catch (error) {
      console.error(error);
      toast.error("Ha ocurrido un error D:");
    }
  };

  //DELETE - ELIMINAR
  const handleDelete = async () => {
    try {
      await ProductService.deleteProduct(prod.id);

      toast.success("Producto Eliminado con éxito",{
        position: "top-center",
      });

      onHide();

      refreshData(prevState => !prevState);
      
    } catch (error) {
      console.error(error);
      toast.error("Ha ocurrido un error D:");
    }
  };

  //Yup, esquema de validación
  const validationSchema = () => {

    return Yup.object().shape({
      id: Yup.number().integer().min(0),
      title: Yup.string().required('El título es requerido'),
      price: Yup.number().min(0).required('El precio es requerido'),
      description: Yup.string().required('La descripción es requerida'),
      category: Yup.string().required('La categoria es requerida'),
      image: Yup.string().required('La URL de la imagen es requerida'),

    });
  };

  //Formik utiliza el esquema de validación para crear un formulario dinámico y que bloquee
  //en caso de haber errores.
  const formik = useFormik({
    initialValues: prod,
    validationSchema: validationSchema(),
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (obj: Product) => handleSaveUpdate(obj),

  });

  return (
    <>
      {modalType == ModalType.DELETE ? (
        <>
          <Modal show={show} onHide={onHide} centered backdrop="static">

            <Modal.Header closeButton>

              <Modal.Title>{title}</Modal.Title>

            </Modal.Header>

            <Modal.Body>

              <p>¿Está seguro que desea eliminar el producto? <br /> <strong> {prod.title} </strong> </p>

            </Modal.Body>

            <Modal.Footer>

              <Button variant="secondary" onClick={onHide}>Cancelar</Button>
              <Button variant="danger" onClick={handleDelete}>Eliminar</Button>

            </Modal.Footer>

          </Modal>
        </>
      ) : (
        <Modal show={show} onHide={onHide} centered backdrop="static" className="modal-xl">

          <Modal.Header closeButton>

            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>

            <Form onSubmit={formik.handleSubmit}>

              {/* Form.Group para cada campo para dar de alta o modificar un producto */}

              {"Titulo"}

              <Form.Group controlId="formTitulo">

                <Form.Control

                  name="title"
                  type="text"
                  value={formik.values.title || ''}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={Boolean(formik.errors.title && formik.touched.title)}
                />

                <Form.Control.Feedback type="invalid">

                  {formik.errors.title}

                </Form.Control.Feedback>


              </Form.Group>

              {"Precio"}

              <Form.Group controlId="formPrice">

                <Form.Control

                  name="price"
                  type="number"
                  value={formik.values.price || ''}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={Boolean(formik.errors.price && formik.touched.price)}
                />

                <Form.Control.Feedback type="invalid">

                  {formik.errors.price}

                </Form.Control.Feedback>


              </Form.Group>

              {"Descripción"}

              <Form.Group controlId="formDescription">

                <Form.Control

                  name="description"
                  type="text"
                  value={formik.values.description || ''}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={Boolean(formik.errors.description && formik.touched.description)}
                />

                <Form.Control.Feedback type="invalid">

                  {formik.errors.description}

                </Form.Control.Feedback>


              </Form.Group>

              {"Categoría"}

              <Form.Group controlId="formCategory">

                <Form.Control

                  name="category"
                  type="text"
                  value={formik.values.category || ''}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={Boolean(formik.errors.category && formik.touched.category)}
                />

                <Form.Control.Feedback type="invalid">

                  {formik.errors.category}

                </Form.Control.Feedback>


              </Form.Group>

              {"Imagen"}

              <Form.Group controlId="formCategory">

                <Form.Control

                  name="image"
                  type="text"
                  value={formik.values.image || ''}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={Boolean(formik.errors.image && formik.touched.image)}
                />

                <Form.Control.Feedback type="invalid">

                  {formik.errors.image}

                </Form.Control.Feedback>


              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer className="mt-4">

            <Button variant="secondary" onClick={onHide}>Cancelar</Button>
            <Button variant="primary" type="submit" disabled={!formik.isValid}>Guardar</Button>

          </Modal.Footer>
        </Modal>
      )}

    </>
  )
}

export default ProductModal
