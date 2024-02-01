import React from "react";
import styled from "styled-components";

const CursoSection = () => {
  return (
    <CursosContainer id="cursos">
      <ContenidoSeccion>
        <TituloSeccion>Cursos</TituloSeccion>
        <Fila>

          <Columna>
            <TituloDetalle>Informática</TituloDetalle>
            <p> Lugar | Fecha de inicio - Fecha de Fin</p>
          </Columna>

          <Columna>
            <TituloDetalle>Ciberseguridad</TituloDetalle>
            <p> Lugar | Fecha de inicio - Fecha de Fin</p>
          </Columna>

          <Columna>
            <TituloDetalle>Programación en HTML, CSS y JavaScript</TituloDetalle>
            <p> Lugar | Fecha de inicio - Fecha de Fin</p>
          </Columna>

          <Columna>
            <TituloDetalle>Base de Datos</TituloDetalle>
            <p> Lugar | Fecha de inicio - Fecha de Fin</p>
          </Columna>
          <Columna>
            <TituloDetalle>Programación en Python, en C# y en Java</TituloDetalle>
            <p> Lugar | Fecha de inicio - Fecha de Fin</p>
          </Columna>

        </Fila>
      </ContenidoSeccion>
    </CursosContainer>
  );
};


const CursosContainer = styled.section`
  background-color: #EEE7DA;
  padding: 80px 0;
  text-align: center;
`;
const ContenidoSeccion = styled.div`
  max-width: 1000px;
  margin: auto;
`;
const TituloSeccion = styled.h2`
    font-size: 2rem;
    margin-bottom: 40px;
`;
const Fila = styled.div`
   display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;
const Columna = styled.div`
  width: 45%;
    margin-bottom: 30px;
    padding: 20px;
    border: 1px solid #ddd;
    background-color: #dee5e5;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media screen and (max-width:800px){
        width: 100%;
    }
`;
const TituloDetalle = styled.span`
    font-weight: bold;
    color: #F7B787;
`;

export default CursoSection;