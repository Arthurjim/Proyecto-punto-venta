import React from 'react';
import Header from '../components/Header.js'
import ContentEmpresa from '../components/Content-empresa.js';
import ContentProduct from '../components/ContentProduct';
import ProductoSelect from '../components/ProductoSelect';
import '../assets/styles/home.css';
class Ventas extends React.Component{
  render(){
    return (
      <>
      <Header/>
      <ContentEmpresa />
      <ContentProduct />
      <ProductoSelect />
      </>
    )
  }
}

export default Ventas;