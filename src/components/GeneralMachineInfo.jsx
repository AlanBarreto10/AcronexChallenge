const GeneralMachineInfo = ({generalMachineData}) => {
    return (
      <div className="bg-white rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4 bg-gray-200 text-center">
             <span className="p-1 rounded">General</span>
        </h2>
        <div className="grid grid-cols-1">
          <div className="flex justify-center w-full">
            <p className="font-medium mb-2 w-1/3">Cosechando</p>
            <p className="mb-2">{generalMachineData.Cosechando}</p>
          </div>
          <div className="flex justify-center w-full">
            <p className="font-medium mb-2 w-1/3">Batería interna</p>
            <p className="mb-2">{generalMachineData['Bateria interna']}</p>
          </div>
          <div className="flex justify-center w-full">
            <p className="font-medium mb-2 w-1/3">Batería vehículo</p>
            <p className="mb-2 ">{generalMachineData['Bateria vehiculo']}</p>
          </div>
          <div className="flex justify-center w-full">
            <p className="font-medium mb-2 w-1/3">Uso Combustible</p>
            <p className="mb-2">{generalMachineData['Uso Combustible']}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default GeneralMachineInfo;