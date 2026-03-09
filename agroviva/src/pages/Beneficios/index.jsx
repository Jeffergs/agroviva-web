import CardBeneficio from "../../components/CardBeneficio";
import {beneficiosAgroviva} from "../../data/beneficiosAgroviva"

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
    </main>
    </>
    )
    } 

export default Beneficios;