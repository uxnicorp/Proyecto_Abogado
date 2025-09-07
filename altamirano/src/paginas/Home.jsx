import React, { useEffect } from "react";
import "./css/Home.css";
import Testimonios from "../componentes-generales/Testimonios";
import { Link } from "react-router-dom";
import PerfilProfesional from "./PerfilProfesional.jsx";
import { Faqs } from "./Faqs.jsx";

const Home = () => {
  useEffect(() => {    
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const targets = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");            
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <section className="home" id="home">
        <div className="home-backdrop" aria-hidden="true" />
        <div className="overlay reveal">
          <p className="subtitle">Su Abogada de mayor confianza desde 2005</p>
          <h1 className="title">Servicios legales de primer nivel</h1>
          <div className="btn-wrapper">
            <Link
              to="/servicios"
              className="btn-home"
              aria-label="Ir a servicios legales"
            >
              Servicios
            </Link>
          </div>
        </div>
      </section>
      
      <div className="section-wrapper reveal">
        <PerfilProfesional />
      </div>

      <div className="reveal">
        <Testimonios />
      </div>
     
      <div className="section-wrapper reveal">
        <Faqs />
      </div>
    </>
  );
};

export default Home;
