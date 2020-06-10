import React from 'react';

const ContentProduct = () => {
    return (
        <div className="content-producto">

            <div className="codigo">
                <label>CODIGO</label>
                <input type="text" name="codigo" id="codigo" placeholder="codigo" />
            </div>
            <div className="nombre">
                <label>NOMBRE</label>
                <input type="text" name="nombre" id="nombre" placeholder="Nombre" />
                <label> CANT</label>
                <input type="number" name="cantidad" id="cantidad" placeholder="cantidad" />
            </div>
            <div className="precio-u">
                <label>PRECIO</label>
                <input type="text" placeholder="$000" className="precio" />
                <label>PRECIO TOTAL</label>
                <input type="text" placeholder="$000" className="precio" />
            </div>
            <button>Agregar</button>
        </div>
    )
}

export default ContentProduct;