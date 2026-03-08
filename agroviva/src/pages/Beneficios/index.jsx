import Agricultor from "../../assets/Agricultor.png"
import Alimentacao from "../../assets/Alimentacao.png"
import Feiras from "../../assets/Feiras.png"
import Solidariedade from "../../assets/Solidariedade.png"

function Beneficios(){
    return(
        <> 
        <main className="main-bg py-5 text-center text-dark">
        <div className="container mb-5">
            <h1 className="fw-bold text-dark lh-sm">
                Benefícios 
            </h1>
        </div>

        <section className="container">
            <div className="row g-4 justify-content-center">
            <article className="col-12 col-sm-6 col-lg-3">
                <div
                className="card border-0 shadow-lg p-4 text-center h-100 rounded-4"
                >
                <img
                    src={Agricultor}
                    alt="Agricultor local"
                    className="img-fluid rounded-circle mx-auto"
                    style={{width: "150px", height: "150px", objectFit: "cover"}}
                />
                <h2 className="fw-bold text-dark mb-2">
                    Acesso direto ao agricultor local
                </h2>
                <p className="text-muted small mb-0">
                    Comprar frutas, verduras e legumes sem atravessadores, com preço
                    justo.
                </p>
                </div>
            </article>

            <article className="col-12 col-sm-6 col-lg-3">
                <div
                className="card border-0 shadow-lg p-4 text-center h-100 rounded-4"
                >
                <img
                    src={Alimentacao}
                    alt="Alimentação saudável"
                    className="img-fluid rounded-circle mx-auto"
                    style={{width: "150px", height: "150px", objectFit: "cover"}}
                />
                <h2 className="fw-bold text-dark mb-2">
                    Alimentação mais barata e nutritiva
                </h2>
                <p className="text-muted small mb-0">
                    Mais acesso a comida fresca, menos dependência de
                    ultraprocessados.
                </p>
                </div>
            </article>

            <article className="col-12 col-sm-6 col-lg-3">
                <div
                className="card border-0 shadow-lg p-4 text-center h-100 rounded-4"
                >
                <img
                    src={Feiras}
                    alt="Feiras e cozinhas comunitárias"
                    className="img-fluid rounded-circle mx-auto"
                    style={{width: "150px", height: "150px", objectFit: "cover"}}
                />
                <h2 className="fw-bold text-dark mb-2">
                    Mapas de feiras e cozinhas comunitárias
                </h2>
                <p className="text-muted small mb-0">
                    Veja no celular os locais mais próximos para retirada de
                    alimentos.
                </p>
                </div>
            </article>

            <article className="col-12 col-sm-6 col-lg-3">
                <div
                className="card border-0 shadow-lg p-4 text-center h-100 rounded-4"
                >
                <img
                    src={Solidariedade}
                    alt="Rede de solidariedade"
                    className="img-fluid rounded-circle mx-auto"
                    style={{width: "150px", height: "150px", objectFit: "cover"}}
                />
                <h2 className="fw-bold text-dark mb-2">Rede de solidariedade</h2>
                <p className="text-muted small mb-0">
                    Se houver sobra de produção, ela chegará à sua comunidade
                    através de doações ou preços populares.
                </p>
                </div>
            </article>
            </div>
        </section>
        </main>

        </>


    )
}
export default Beneficios;