import Indicador from "./Indicador";

const Indicadores = ({ indicadoresData }) => {
    return (
      <div className="grid grid-cols-2 gap-2 mb-4 justify-center">
        <Indicador titulo="Taponamiento" porcentaje={indicadoresData.it} color="#93bf85"/>
        <Indicador titulo="Evaporación" porcentaje={indicadoresData.ie} color= "#469536"/>
        <Indicador titulo="Pérdida p. viento" porcentaje={indicadoresData.id} color="#008000" />
        <Indicador titulo="Calidad" porcentaje={indicadoresData.ig} color="#bfbf6c" />
      </div>
    );
  };
  export default Indicadores;