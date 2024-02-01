import React from "react";
import styled from "styled-components";

const EducacionSection = () => {
  return (
    <EducacionContainer id="educacion">
      <ContenidoSeccion>
        <TituloSeccion>Educación</TituloSeccion>
        <Fila>

          <Columna>
            <TituloDetalle>Tecnicatura en Informática</TituloDetalle>
            <p>ET Dr.JR Vidal | Fecha de inicio - Fecha de Fin </p>
          </Columna>

          <Columna>
            <TituloDetalle>Analista Programadora</TituloDetalle>
            <p>ISSD | Fecha de inicio - Fecha de Fin</p>
          </Columna>

          <Columna>
            <TituloDetalle>Tecnicatura en Análisis de Sistemas</TituloDetalle>
            <p>ISSD | Fecha de inicio - Fecha de Fin</p>
          </Columna>

        </Fila>
      </ContenidoSeccion>
    </EducacionContainer>
  );
};


const EducacionContainer = styled.section`
  background-color: #AFC8AD;
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
    color: #AFC8AD;
`;

export default EducacionSection;