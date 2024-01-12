const ClimaMachineInfo = ({climaMachineInfo}) => {
    return (
      <div className="bg-white rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4 bg-gray-200 text-center">
             <span className="p-1 rounded">Clima</span>
        </h2>
        <div className="grid grid-cols-1">
          <div className="flex justify-center w-full">
            <p className="font-medium mb-2 w-1/3">Temperatura</p>
            <p className="mb-2">{climaMachineInfo.Temperatura}</p>
          </div>
          <div className="flex justify-center w-full">
            <p className="font-medium mb-2 w-1/3">Humedad</p>
            <p className="mb-2 ">{climaMachineInfo.Humedad}</p>
          </div>
          <div className="flex justify-center w-full">
            <p className="font-medium mb-2 w-1/3">Direccion del viento</p>
            <p className="mb-2">{climaMachineInfo['Direccion Viento']}</p>
          </div>
          <div className="flex justify-center w-full">
            <p className="font-medium mb-2 w-1/3">Velocidad del viento</p>
            <p className="mb-2">{climaMachineInfo['Velocidad Viento']}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ClimaMachineInfo;