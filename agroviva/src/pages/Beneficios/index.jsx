import CardBeneficio from "../../components/CardBeneficio";
import { beneficiosAgroviva } from "../../data/beneficiosAgroviva";

function Beneficios() {
  return (
    <>
      <main className="main-bg py-5 text-dark">

        <div className="container">

          <h1 className="fw-bold text-center lh-sm mb-5">
            Benefícios
          </h1>

          <section>
            <div className="row g-4">

              {beneficiosAgroviva.map((item, index) => (
                <div className="col-12 col-md-6 col-lg-6" key={index}>
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
    </>
  );
}

export default Beneficios;