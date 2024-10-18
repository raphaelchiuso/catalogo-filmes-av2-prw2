import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Catálogo de Filmes</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/create">Criar</Link>
          </li>
          <li>
            <Link to="/update">Alterar</Link>
          </li>
          <li>
            <Link to="/delete">Apagar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;