import Carousel from "react-bootstrap/Carousel";
import "./css/Testimonios.css";

const data = [
  {
    quote:
      "La Dra. Altamirano me acompañó en un proceso complejo con mucha claridad y compromiso. Sentí confianza en cada paso y obtuve una solución justa a mi problema.",
    author: "Milagros Morales",
  },
  {
    quote:
      "Me asesoró en un reclamo laboral por horas extras no pagadas. Armó una estrategia clara y siempre me mantuvo informada. Conseguimos un acuerdo favorable.",
    author: "Soledad Rivas",
  },
  {
    quote:
      "Necesitaba regularizar una situación de alimentos y régimen de comunicación. La Dra. fue empática y firme; logramos un convenio rápido que priorizó a mis hijos.",
    author: "Gabriel Pereyra",
  },
  {
    quote:
      "Enfrenté una denuncia penal injusta. Su acompañamiento fue clave: presentó las pruebas correctas y se desestimó la causa. Profesionalismo absoluto.",
    author: "Mariano Torres",
  },
  {
    quote:
      " Me ayudó a redactar un contrato de compraventa con todas las garantías. Evitó riesgos que yo no había considerado. Excelente trabajo preventivo. Sin dudas la volvería a elegir.",
    author: "Patricia López",
  },
  {
    quote:
      "Gestionó la sucesión de mi familia con mucha prolijidad y respeto por los tiempos de todos. Transparente de principio a fin. Nos dio tranquilidad en un momento difícil.",
    author: "Héctor Álvarez",
  },
];

const Testimonios = () => {
  return (
    <section className="testimonios">
      <div className="testi__wrap">
        <div className="testi__left">
          <h2 className="testi__title">Testimonio de clientes</h2>
          <p className="testi__subtitle">¿Por qué debería contratarme?</p>
        </div>

        <div className="testi__right testimonios-carousel">
          <Carousel interval={7000} indicators={true} controls={true} fade>
            {data.map((t, i) => (
              <Carousel.Item key={i}>
                <figure className="testi__card">
                  <blockquote className="testi__quote">“{t.quote}”</blockquote>
                  <figcaption className="testi__author">
                    — {t.author}
                  </figcaption>
                </figure>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
