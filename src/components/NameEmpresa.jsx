const NameEmpresa = ({ nombre, id }) => {
    return (
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-700">{nombre}</h1>
        <span className="text-sm font-semibold text-gray-500">{id}</span>
      </div>
    );
  };

  export default NameEmpresa;