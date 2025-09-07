import React, { useEffect, useMemo, useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { useSearchParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "./css/Formulario.css";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const SERVICIOS_VALIDOS = ["Derecho civil", "Derecho penal", "Derecho laboral"];

const Formulario = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [show, setShow] = useState(true);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [servicio, setServicio] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [errors, setErrors] = useState({});

  const servicioParam = useMemo(
    () => (searchParams.get("service") || "").trim(),
    [searchParams]
  );

  useEffect(() => {
    if (servicioParam && SERVICIOS_VALIDOS.includes(servicioParam)) {
      setServicio(servicioParam);
    }
  }, [servicioParam]);

  const handleClose = () => {
    setShow(false);
    navigate(-1);
  };

  const validate = () => {
    const newErrors = {};
    if (!nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    if (!email.trim()) newErrors.email = "El email es obligatorio.";
    else if (!EMAIL_REGEX.test(email)) newErrors.email = "Email inválido.";
    if (!servicio.trim()) newErrors.servicio = "Selecciona un servicio.";
    else if (!SERVICIOS_VALIDOS.includes(servicio)) {
      newErrors.servicio = "Servicio no válido.";
    }
    if (!mensaje.trim()) newErrors.mensaje = "El mensaje es obligatorio.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    Swal.fire({
      title: "¡Consulta enviada!",
      text: "Te contactaremos a la brevedad.",
      icon: "success",
      background: "#171717",
      color: "#fff",
      confirmButtonColor: "#b07a5e",
      confirmButtonText: "Aceptar",
    }).then(() => {
      handleClose();
    });
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      contentClassName="modal-dark"
      backdrop="static"
    >
      <Modal.Header className="modal-dark-header">
        <Modal.Title className="m-0">Solicitar Asesoramiento</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit} noValidate>
        <Modal.Body className="modal-dark-body">
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <Form.Group controlId="campoNombre">
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ej: Guadalupe Diaz"
                  isInvalid={!!errors.nombre}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.nombre}
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            <div className="col-12 col-md-6">
              <Form.Group controlId="campoEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="micorreo@ejemplo.com"
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            <div className="col-12">
              <Form.Group controlId="campoServicio">
                <Form.Label>Servicio</Form.Label>
                <Form.Select
                  value={servicio}
                  onChange={(e) => setServicio(e.target.value)}
                  isInvalid={!!errors.servicio}
                >
                  <option value="">Selecciona un servicio...</option>
                  {SERVICIOS_VALIDOS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.servicio}
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            <div className="col-12">
              <Form.Group controlId="campoMensaje">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Contanos brevemente tu caso o consulta..."
                  isInvalid={!!errors.mensaje}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.mensaje}
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className="modal-dark-footer">
          <button type="button" className="btn-cancel" onClick={handleClose}>
            Cancelar
          </button>
          <button type="submit" className="btn-home">
            Enviar consulta
          </button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default Formulario;
