const OperationMachineInfo = ({operationMachineInfo}) => {
    return (
      <div className="bg-white rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4 bg-gray-200 text-center">
             <span className="p-1 rounded">Operacion</span>
        </h2>
        <div className="grid grid-cols-1">
          <div className="flex justify-center w-full">
            <p className="font-medium mb-2 w-1/3">Velocidad</p>
            <p className="mb-2">{operationMachineInfo.Velocidad}</p>
          </div>
          <div className="flex justify-center w-full">
            <p className="font-medium mb-2 w-1/3">Presion</p>
            <p className="mb-2 ">{operationMachineInfo.Presión}</p>
          </div>
          <div className="flex justify-center w-full">
            <p className="font-medium mb-2 w-1/3">Producto/hectarea</p>
            <p className="mb-2">{operationMachineInfo['Producto / hectarea']}</p>
          </div>
          <div className="flex justify-center w-full">
            <p className="font-medium mb-2 w-1/3">Ancho</p>
            <p className="mb-2">{operationMachineInfo.Ancho}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default OperationMachineInfo;