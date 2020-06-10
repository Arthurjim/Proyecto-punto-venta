import React from 'react';
import avatar from '../assets/static/avatar.png'
const ContentEmpresa = () => {
  return (
    <div className="content-empresa">
      <div className="logo">
        <img src={avatar} alt="" />
      </div>
      <div className="label">
        <label >FOLIO</label>
        <label>FECHA</label>
        <label>TIPO</label>
        <label >Imprimir tiquet</label>
        <input type="text" name="folio" id="folio" placeholder=" Folio"/>

        <input type="text" name="fecha" id="fecha" placeholder="Fecha"/>

        <input type="text" name="tipo" id="tipo" placeholder="Tipo de pago"/>
        <input type="checkbox" />
      </div>


    </div>
  )
}
export default ContentEmpresa;