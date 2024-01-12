const Indicador = ({ titulo, porcentaje, color }) => {
    return (
      <div className="justify-between items-center text-white rounded-lg p-2" style ={{backgroundColor: color}}>
        <p className="font-medium">{titulo}</p>
        <p className="text-2xl font-bold">{porcentaje}%</p>
      </div>
    );
  };

  export default Indicador;
