import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import {createGlobalStyle } from 'styled-components';

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
   <Footer></Footer>
  
   </>
  ,
  document.getElementById('root')
);
