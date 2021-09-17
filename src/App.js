import React from 'react';
import { ThemeProvider } from 'styled-component';


import theme from './theme';
import Cabecalho from './components/navegacao/Cabecalho';



function App() {
  return (
    <ThemeProvider theme = {theme}><Cabecalho/></ThemeProvider>
  );
}

export default App;
