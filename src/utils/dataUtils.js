export const extractIndicadoresData = (data) => {
    const valuesLast = data.last;
    const keys = ["it", "ie", "id", "ig"];
    const indicadores = {};

    keys.forEach((key) => {
        if (valuesLast.hasOwnProperty(key) && key=="ig") {
                const val = 1- valuesLast[key];
                indicadores[key] = val*100;
        }else{
            indicadores[key] = valuesLast[key]*100;
        }              
    });

    return indicadores;
};

export const extractGeneralData = (data) => {
    const headers = data.data_description.headers;
    const valuesLast = data.last;
    
    const valuesKeys = ["Cosechando", "Bateria interna", "Bateria Vehiculo ", "Uso Combustible"]; //son los elementos que quiero mostrar
    
    const dataGeneral = {};

    for (const key in headers) {
        if (headers.hasOwnProperty(key)) {
          const header = headers[key];
          
          if (header.g === 0) {
            dataGeneral[key] = header;
          }
        }
    }

    const valuesGeneral = {};


    for (const clave in dataGeneral) {

        if (dataGeneral.hasOwnProperty(clave)) {
       
          const elementoGrupo = dataGeneral[clave];
          const nombreElemento = elementoGrupo.n; 
      
            if (valuesKeys.includes(nombreElemento) && valuesLast.hasOwnProperty(clave)) {
                const valorElemento = valuesLast[clave];
                const unidadElemento = elementoGrupo.u || ''; 
                valuesGeneral[nombreElemento] = valorElemento !== undefined ? `${valorElemento} ${unidadElemento}` : '-';
            } else {
                valuesGeneral[nombreElemento] = '-';
            }
        }
    }
    return valuesGeneral;

};

export const extractClimaData = (data) => {


    const headers = data.data_description.headers;
    const valuesLast = data.last;

    const valuesKeys = ["Temperatura", "Humedad", "Direccion Viento", "Velocidad Viento"]; //son los elementos que quiero mostrar
    
    const dataClima = {};

    for (const key in headers) {
        if (headers.hasOwnProperty(key)) {
          const header = headers[key];
          
          if (header.g === 1) {
            dataClima[key] = header;
          }
        }
    }

    const valuesClima = {};


    for (const clave in dataClima) {
        if (dataClima.hasOwnProperty(clave)) {
          const elementoGrupo = dataClima[clave];
          const nombreElemento = elementoGrupo.n; 
          
            if (valuesKeys.includes(nombreElemento) && valuesLast.hasOwnProperty(clave)) {
                const valorElemento = valuesLast[clave];
                const unidadElemento = elementoGrupo.u || ''; 
                valuesClima[nombreElemento] = valorElemento !== undefined ? `${valorElemento} ${unidadElemento}` : '-';
            } else {
                valuesClima[nombreElemento] = '-';
            }
        }
    }
    return valuesClima;
    
};

export const extractOperationData = (data) => {


    const headers = data.data_description.headers;
    const valuesLast = data.last;

    const valuesKeys = ["Velocidad", "Presión", "Producto / hectarea", "Ancho"]; //son los elementos que quiero mostrar
    
    const dataOperation = {};

    for (const key in headers) {
        if (headers.hasOwnProperty(key)) {
          const header = headers[key];
          
          if (header.g === 2) {
            dataOperation[key] = header;
          }
        }
    }

    const valuesOperation = {};


    for (const clave in dataOperation) {
        if (dataOperation.hasOwnProperty(clave)) {
          const elementoGrupo = dataOperation[clave];
          const nombreElemento = elementoGrupo.n; 
          
            if (valuesKeys.includes(nombreElemento) && valuesLast.hasOwnProperty(clave)) {
                const valorElemento = valuesLast[clave];
                const unidadElemento = elementoGrupo.u || ''; 
                valuesOperation[nombreElemento] = valorElemento !== undefined ? `${valorElemento} ${unidadElemento}` : '-';
            } else {
                valuesOperation[nombreElemento] = '-';
            }
        }
    }
    return valuesOperation;
    
};


