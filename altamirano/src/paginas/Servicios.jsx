import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Servicios.css";

const Servicios = () => {
  const rootRef = useRef(null);
  const navigate = useNavigate(); 

  const irAFormulario = (servicio) => {
    navigate(`/formulario?service=${encodeURIComponent(servicio)}`);
  };

  useEffect(() => {
    if (!rootRef.current) return;

    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      rootRef.current.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("in");
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in");
        });
      },
      { threshold: 0.2 }
    );

    rootRef.current.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="servicios-container" ref={rootRef}>
      <section className="servicios-intro reveal fade-up">
        <div className="text-column">
          <h2 className="title-underline">Servicios</h2>
          <p className="intro-text">
            Mi compromiso es brindar soluciones claras, defensa firme y un trato
            cercano, garantizando confianza y resultados efectivos.
          </p>

          <div className="servicios-list">
            <div className="servicio-item stagger">
              <span className="icon">📜</span>
              <h3>Asesoría en Derecho Civil</h3>
            </div>
            <div className="servicio-item stagger">
              <span className="icon">📜</span>
              <h3>Asesoría en Derecho Penal</h3>
            </div>
            <div className="servicio-item stagger">
              <span className="icon">📜</span>
              <h3>Asesoría en Derecho Laboral</h3>
            </div>
          </div>
        </div>

        <div className="image-column reveal fade-in">
          <div className="image-frame">
            <img src="/law-books.png" alt="Libros de leyes" />
          </div>
        </div>
      </section>

      <section className="servicios-detalle reveal fade-up">
        <h2 className="center title-underline">
          Mis principales especialidades
        </h2>

        <div className="detalle-grid">
          <div className="detalle-item card-quiet stagger">
            <span className="detalle-num">01</span>
            <h3>Derecho Civil</h3>
            <p>
              Brindo asesoramiento y representación legal en el ámbito del
              Derecho Civil, acompañando a mis clientes en la resolución de
              conflictos relacionados con contratos, sucesiones, propiedad,
              responsabilidad civil y familia. Mi enfoque combina
              profesionalismo, cercanía y compromiso, garantizando soluciones
              jurídicas claras y efectivas.
            </p>
            
            <button
              type="button"
              className="btn-home"
              onClick={() => irAFormulario("Derecho civil")}
            >
              Asesorarme
            </button>
          </div>

          <div className="detalle-item card-quiet stagger">
            <span className="detalle-num">02</span>
            <h3>Derecho Penal</h3>
            <p>
              Me dedico a la defensa y representación en el ámbito del Derecho
              Penal, acompañando a personas involucradas en procesos judiciales
              con un enfoque en la protección de sus derechos y garantías
              constitucionales. Brindo asesoramiento en causas penales,
              querellas, denuncias y estrategias de defensa, actuando con
              compromiso, ética y firmeza en cada caso.
            </p>
            
            <button
              type="button"
              className="btn-home"
              onClick={() => irAFormulario("Derecho penal")}
            >
              Asesorarme
            </button>
          </div>

          <div className="detalle-item card-quiet stagger">
            <span className="detalle-num">03</span>
            <h3>Derecho Laboral</h3>
            <p>
              Doy asesoramiento y representación legal en el campo del Derecho
              Laboral, defendiendo los derechos de trabajadores y empleadores.
              Me ocupo de casos relacionados con despidos, indemnizaciones,
              relaciones salariales, condiciones de trabajo y seguridad social,
              ofreciendo soluciones jurídicas claras y efectivas. Mi labor se
              caracteriza por la defensa justa, la empatía y la búsqueda de
              acuerdos beneficiosos para mis clientes.
            </p>
            
            <button
              type="button"
              className="btn-home"
              onClick={() => irAFormulario("Derecho laboral")}
            >
              Asesorarme
            </button>
          </div>

          <div className="detalle-media stagger">
            <div className="image-frame image-frame--grid">
              <img src="../../public/manos.png" alt="Apretón de manos" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
