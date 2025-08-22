import "./css/Home.css";
import Testimonios from "../componentes-generales/Testimonios";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <section className="home">
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

      <Testimonios />
    </>
  );
};

export default Home;
