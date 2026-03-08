import { Link } from "react-router-dom"

function Navbar(){
    return(
        
        <>
        <Link to="/">Home</Link>
        <Link to="impacto">Impacto social</Link>
        <Link to="beneficios">Benefícios</Link>
        <Link to="fale">Fale Conosco</Link>        
        </>

    )
}

export default Navbar;