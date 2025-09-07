import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/PerfilProfesional.css";
import perfilImg from "../../public/dr-altamirano.png";

const PerfilProfesional = () => {
    return (
        <section id="perfil" className="perfil-section">
            <Container>
                <Row className="align-items-center gy-4">
                    <Col md={6}>
                        <h2 className="perfil-title">Perfil profesional</h2>
                        <p className="perfil-parrafo">
                            El bienestar de mis clientes es mi máxima prioridad. Mantengo una
                            comunicación constante con quienes atiendo y me comprometo a
                            satisfacer sus necesidades y deseos inmediatos. Trabajo incansablemente
                            para brindar los servicios y el apoyo necesarios que cada cliente necesita.
                        </p>
                    </Col>

                    <Col md={6}>
                        <div className="perfil-img-wrap">
                            <img
                                src={perfilImg}
                                alt="Perfil de la Dra. Altamirano"
                                className="img-fluid rounded-3 shadow-sm"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PerfilProfesional;
