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
           
        <section>

        {beneficiosAgroviva.map((item, index) => (
            <CardBeneficio
            key={index}
            icone={item.icone}
            alt={item.alt}
            titulo={item.titulo}
            descricao={item.descricao}
            />
            
        ))}

        </section>
    </main>
    </>
    )
    } 

export default Beneficios;