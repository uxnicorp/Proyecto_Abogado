import "./css/Home.css";
import Testimonios from "../componentes-generales/Testimonios";
import { Link } from "react-router-dom";
import PerfilProfesional from "./PerfilProfesional.jsx";
import { Faqs } from "./Faqs.jsx";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="overlay">
          <p className="subtitle">Su Abogada de mayor confianza desde 2005</p>
          <h1 className="title">Servicios legales de primer nivel</h1>
          <div className="btn-wrapper">
            <a href="/servicios" className="btn-home">
              SERVICIOS
            </a>
          </div>
        </div>
      </section>

      <PerfilProfesional />
      <Testimonios />
      <Faqs />
    </>
  );
};

export default Home;
