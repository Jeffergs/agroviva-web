import { Link } from "react-router-dom";
import logoIcon from "../assets/Logo_AgroViva1.PNG";

function Navbar() {
  return (
    <header className="topbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={logoIcon}
              alt="Logo AgroViva Web"
              className="me-2"
              style={{ width: "35px", height: "34px", borderRadius: "8px" }}
            />
            <span className="fw-bold text-success">AgroViva Web</span>
          </Link>

          {/* Botão mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav gap-lg-3">
              <li className="nav-item">
                <Link className="nav-link fw-bold text-success" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/impacto">
                  Impacto Social
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/beneficios">
                  Benefícios
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/chatbot">
                  Chatbot
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/fale">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
