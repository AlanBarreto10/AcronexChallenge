import GeneralMachineInfo from '../components/GeneralMachineInfo';
import ClimaMachineInfo from '../components/ClimaMachineInfo';
import OperationMachineInfo from '../components/OperationMachineInfo';
import DetailsMachine from '../components/DetailsMachine';
import Indicadores from '../components/Indicadores';
import NameEmpresa from '../components/NameEmpresa';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { extractClimaData, extractGeneralData, extractIndicadoresData, extractOperationData } from '../utils/dataUtils';



const MachineInfo = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  //aca intente obtener el response con mi fichero fetchData.js pero me genero muchos problemas//
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://wrk.acronex.com/api/challenge/machines?q=${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const machineData = await response.json();
        setData(machineData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching machine data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    
      <div className="bg-white px-6 py-5 ">

      <NameEmpresa nombre={data.description} id={data.id} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
        
        <div className="bg-white p-4 ">
          <Indicadores indicadoresData={extractIndicadoresData(data)} />
          <DetailsMachine detailsMachine={data} />
        </div>

        <div className="bg-white">
          <GeneralMachineInfo generalMachineData={extractGeneralData(data)}/>
          <ClimaMachineInfo climaMachineInfo={extractClimaData(data)}/>
          <OperationMachineInfo operationMachineInfo={extractOperationData(data)} />
        </div>

      </div>
    </div>
    
    
  );
};

export default MachineInfo;