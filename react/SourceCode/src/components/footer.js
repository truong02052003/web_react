export default function Footer() {
  return (
    <div className="footer">
      <nav className="navbar-expand-lg navbar-light">
        <img src="images/logo.png" alt="logo" id="logo" className="navbar-brand" />
        <button 
          className="navbar-toggler float-right" 
          type="button" 
          data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <ul className="collapse navbar-collapse navbar-nav" id="navbarSupportedContent">
          <li className="nav-item active">
            <a href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item dropdown">
            <a href="#">Rainwater Harvesting</a>
            <ul>
              <li><a href="residential.html">Residential Area</a></li>
              <li><a href="commercial.html">Commercial Area</a></li>
              <li><a href="product.html">Products</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="method.html">Methods</a>
          </li>
          <li className="nav-item">
            <a href="development.html">Developments</a>
          </li>
          <li className="nav-item">
            <a href="contact.html">Contact</a>
          </li>
        </ul> */}
      </nav>
      <div className="contact">
        <p><i className="bi bi-house-fill"></i> HTC Tower, 250 Hoang Quoc Viet, Co Nhue, Cau Giay, Ha Noi, VietNam</p>
        <p><i className="bi bi-envelope-fill"></i> mait51315@gmail.com</p>
        <p><i className="bi bi-telephone-fill"></i> +84327182537</p>
      </div>

      <hr />
      <p style={{ padding: '12px 0px' }}>Copyright &copy; 2024 by Group 2. All rights reserved.</p>
    </div>
  );
}
