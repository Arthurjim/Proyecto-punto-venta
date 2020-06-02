import React from 'react';
import '../assets/static/home.css';
function Header(){
  return (
    <div className="container">
      <div className="nav">
        <h1> PUNTO DE VENTA</h1>
        <ul>
          <li><a href="#">Venta</a></li>
          <li><a href="almacen.html">Almacen</a></li>
          <li><a href="#">Ganancias</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;