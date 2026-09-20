import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container">

        <Link className="navbar-brand" to="/">
          LocalShop
        </Link>

        <div className="d-flex gap-3">

          <Link className="nav-link" to="/">
            Inicio
          </Link>

          <Link className="nav-link" to="/login">
            Iniciar sesión
          </Link>

          <Link className="nav-link" to="/register">
            Registrarse
          </Link>

        </div>

      </div>
    </nav>
  );
};