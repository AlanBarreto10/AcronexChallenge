const DetailsMachine = ({detailsMachine}) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 mb-4">
        <h2 className="text-xl font-semibold mb-4">Empresa</h2>
        <div className="mb-3">
          <p className="font-medium">{detailsMachine.company}</p>
        </div>
        <div className="mb-3">
          <p className="font-medium">Clase</p>
          <p className="text-gray-700">{detailsMachine.class}</p>
        </div>
        <div className="mb-3">
          <p className="font-medium">Estado</p>
          <div className="flex items-center">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            <span className="text-gray-700">En movimiento</span>
          </div>
        </div>
        <div>
          <p className="font-medium">Última actualización</p>
          <p className="text-gray-700 flex">{detailsMachine.last_update}</p>
        </div>
      </div>
    );
  };
  
  export default DetailsMachine;