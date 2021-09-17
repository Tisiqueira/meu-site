import React from "react";
import { render, screen } from "@testing-library/react";
import Cabecalho from "./Cabecalho";

test('render Siqueira devs', () =>{
    render(<Cabecalho />);
    const logo = screen.getByText(/Logo/);
    const home = screen.getByText(/Home/);
    const sobre = screen.getByText(/Sobre/);
    const projetos = screen.getByText(/Projetos/);
    const contato = screen.getByText(/Contato/);



    expect(logo).toBeInTheDocument();
    expect(home).toBeInTheDocument();
    expect(sobre).toBeInTheDocument();
    expect(projetos).toBeInTheDocument();
    expect(contato).toBeInTheDocument();
    
})