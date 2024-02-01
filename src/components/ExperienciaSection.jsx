import React from "react";
import styled from "styled-components";

const ExperienciaSection = () => {
  return (
    <ExperienciaContainer id="experiencia">
      <ContenidoSeccion>
        <TituloSeccion>Experiencia Profesional</TituloSeccion>
        <Fila>
          <Columna>
            <TituloDetalle>Desarrolladora Web Front-End Jr.</TituloDetalle>
            <p>
              Titulo del trabajo | Nombre de la Empresa | Fecha de inicio -
              Fecha de Fin
            </p>
            <p>Descripción del puesto (responsabilidades y logros)</p>
          </Columna>

          <Columna>
            <TituloDetalle>Desarrolladora Web Front-End Jr.</TituloDetalle>
            <p>
              Titulo del trabajo | Nombre de la Empresa | Fecha de inicio -
              Fecha de Fin
            </p>
            <p>Descripción del puesto (responsabilidades y logros)</p>
          </Columna>
        </Fila>
      </ContenidoSeccion>
    </ExperienciaContainer>
  );
};

const ExperienciaContainer = styled.section`
  background-color: #88AB8E;
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
    color: #88AB8E;
`;

export default ExperienciaSection;
