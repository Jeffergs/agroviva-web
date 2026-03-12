import CardBeneficio from "../../components/CardBeneficio";
import { beneficiosAgroviva } from "../../data/beneficiosAgroviva";
import { useState } from "react";

function Beneficios() {
  const [tipoBeneficio, setTipoBeneficio] = useState("comunidade");

  return (
    <main className="py-5" style={{ backgroundColor: "#f8fdf9" }}> 
      <div className="container"> 
        
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5" style={{ color: "#1a4731" }}>Benefícios</h1>
          <p className="text-muted">Escolha o seu perfil para ver as vantagens exclusivas</p>
        </div>

        {/* Seleção de Perfil (Filtros) */}
        <div className="d-flex justify-content-center gap-3 mb-5">
          <button
            className={`btn px-4 py-2 rounded-pill fw-bold transition-all ${
              tipoBeneficio === "comunidade" ? "btn-success shadow" : "btn-outline-success"
            }`}
            onClick={() => setTipoBeneficio("comunidade")}
          >
           Comunidade
          </button>

          <button
            className={`btn px-4 py-2 rounded-pill fw-bold transition-all ${
              tipoBeneficio === "agricultor" ? "btn-success shadow" : "btn-outline-success"
            }`}
            onClick={() => setTipoBeneficio("agricultor")}
          >
            Agricultor
          </button>
        </div>

        {/* Grid de Cards */}
        <section>
          <div className="row g-4 justify-content-center">
            {beneficiosAgroviva
              .filter((item) => item.tipo === tipoBeneficio)
              .map((item, index) => (
                <div className="col-12 col-md-6 col-lg-5" key={index}>
                  <CardBeneficio
                    icone={item.icone}
                    alt={item.alt}
                    titulo={item.titulo}
                    descricao={item.descricao}
                  />
                </div>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Beneficios;