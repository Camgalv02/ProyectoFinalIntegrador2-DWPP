import styled, { keyframes } from "styled-components";

const fondo_animado_keyframes = keyframes`
  0%{
    background-position: 0% 50%;
  }
  
  50%{
    background-position: 100% 50%;
  }

  100%{
    background-position: 0% 50%;
  }
  `;

const HabilidadesSection = () => {
  const HabilidadesContainer = styled.section`
    padding: 80px 0 100px 0;
    text-align: center;
    background: linear-gradient(135deg, #082d0f, #304d30, #86a789);
    background-size: 500%;
    color: #fff;
    animation: ${fondo_animado_keyframes} 10s infinite;
  `;

  const ContenidoSeccion = styled.div`
    max-width: 1000px;
    margin: auto;
    padding: 0 10px;
  `;

  const TituloSeccion = styled.h2`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  `;

  const Columna = styled.div`
    width: 30%;
    text-align: left;

    @media screen and (max-width:800px){
    display: block;
    width: 100%;
    text-align: center;
   
}
  `;

  
  return (
    <HabilidadesContainer id="habilidades">
      <ContenidoSeccion>
        <TituloSeccion>Habilidades</TituloSeccion>

        <div className="fila">
          <Columna>
            <span>
              <b>
                <i>HTML5 y CSS3</i>
              </b>
            </span>
            <p>
              Fundamentos, estructura, atributos, propiedades, buenas prácticas.
            </p>
          </Columna>
          <Columna>
            <span>
              <b>
                <i>JavaScript y Node.js</i>
              </b>
            </span>
            <p>
              Variables, estructuras de datos, condicionales, repetitivas. Uso
              de Node.js.
            </p>
          </Columna>
        </div>

        <div className="fila">
          <Columna>
            <span>
              <b>
                <i>Git y GitHub</i>
              </b>
            </span>
            <p>
              Conceptos básicos, diferencias, y cómo utilizarlos en proyectos.
            </p>
          </Columna>
          <Columna>
            <span>
              <b>
                <i>React.js</i>
              </b>
            </span>
            <p>Teoría y práctica, implementación y uso de Style Components.</p>
          </Columna>
        </div>
      </ContenidoSeccion>
    </HabilidadesContainer>
  );
};

export default HabilidadesSection;
