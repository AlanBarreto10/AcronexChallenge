import React, { Suspense } from "react";
import { fetchData } from "../fetchData";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const apiData = fetchData("https://wrk.acronex.com/api/challenge/machines?q=");

const MachinesList = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const data = apiData.read();
    

    const handleMachineClick = (id) => {
        console.log("Press to navigate")
        navigate(`/machines/${id}`);
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="flex justify-center w-full">
                <div className="w-full max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 bg-white p-4 rounded-md">
                        {data?.map(machine => (
                            <div key={machine.id} className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col">
                                <div className="flex justify-between w-full"  onClick={() => handleMachineClick(machine.id)}>
                                    <p className="text-sm">
                                        ({machine.id}) {machine.description} {machine.company}
                                    </p>
                                    <span>
                                        {machine.working 
                                            ? <CheckCircleIcon style={{ color: 'green' }} />
                                            : <CancelIcon style={{ color: 'red' }} />
                                        }
                                    </span>
                                   
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Suspense>
      );
};
export default MachinesList;
