import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <section className="header">
        <nav className="navbar-expand-lg navbar-light">
            <img src="images/logo.png" alt="logo" id="logo" className="navbar-brand"/>
            <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="collapse navbar-collapse navbar-nav" id="navbarSupportedContent">
            <li className="nav-item active">
                <Link to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item dropdown">
                <Link to="#">Rainwater Harvesting</Link>
                <ul>
                    <li><Link to="/residential">Residential Area</Link></li>
                    <li><Link to="/commercial">Commercial Area</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
            </li>
            <li className="nav-item">
                <Link to="/methods">Methods</Link>
            </li>
            <li className="nav-item">
                <Link to="/developments">Developments</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        </nav>
    </section>
  );
}
