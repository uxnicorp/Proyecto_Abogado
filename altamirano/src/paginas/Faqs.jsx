import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import "./css/Faqs.css";

export const Faqs = () => {
  return (
    <section id="faqs" className="faqs-section">
      <Container>
        <Row className="gy-4 align-items-start">
          <Col lg={7} className="order-lg-1 order-2">
            <Accordion flush className="faqs-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>¿La primera consulta tiene costo?</Accordion.Header>
                <Accordion.Body>
                  Sí. Incluye el análisis inicial del caso y alternativas legales.
                  Si avanzamos con el patrocinio, puedo bonificar total o parcialmente ese importe.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>¿Qué documentación necesito llevar?</Accordion.Header>
                <Accordion.Body>
                  DNI, contratos, recibos, telegramas/correos, actas y cualquier
                  comunicación relacionada (físico o digital). Si tenés dudas, enviame lo que
                  tengas y te indico qué falta.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>¿Cómo se calculan los honorarios?</Accordion.Header>
                <Accordion.Body>
                  Se ajustan a la normativa arancelaria vigente y a la complejidad del asunto.
                  Siempre se acuerdan por escrito antes de iniciar cualquier trámite.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>¿Atienden de forma online?</Accordion.Header>
                <Accordion.Body>
                  Sí. Podemos coordinar por videollamada y trabajar con documentación digital.
                  Cuando es necesario, organizamos la firma presencial o con firma digital.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>¿Cómo reservo un turno?</Accordion.Header>
                <Accordion.Body>
                  Escribí por WhatsApp, completá el formulario o llamá de lunes a viernes de 9 a 18 hs.
                  Confirmo día y horario por el mismo medio.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col lg={5} className="order-lg-2 order-1">
            <h2 className="faqs-title">Preguntas frecuentes</h2>
            <p className="faqs-lead">
              Respuestas rápidas a lo que más suele consultarse.
              Si tu duda no aparece acá, escribime y la vemos.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};