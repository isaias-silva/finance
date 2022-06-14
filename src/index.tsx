import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import {createGlobalStyle } from 'styled-components';
import Guia from './components/Guia';
//estilo global
const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding:0;
  }`
ReactDOM.render(
  
   <>
   <GlobalStyle/>
   <Header></Header>
   <Guia name='oi'></Guia>
   <Footer></Footer>
  
   </>
  ,
  document.getElementById('root')
);
