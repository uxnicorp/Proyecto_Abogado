import "./css/Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay">
        <p className="subtitle">Su Abogada de mayor confianza desde 2005</p>
        <h1 className="title">Servicios legales de primer nivel</h1>
        <div className="btn-wrapper">
          <a href="/contacto" className="btn-home">
            SERVICIOS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
