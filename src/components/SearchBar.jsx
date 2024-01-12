import SearchIcon from '@mui/icons-material/Search';
import UserIcon from '@mui/icons-material/AccountCircleRounded';

const SearchBar = () => {

    /*falta funcionalidad de buscador*/ 
    //TODO//
   
    return (
        <div className="flex items-center justify-between bg-secondary p-2 shadow-md h-12">

            <div className="flex items-center h-full">
                <img src="/images/logo_web.png" alt="Logo" className="h-8 mr-2" />
                <img src="/images/titulo_web.png" alt="Logo" className="h-8 mr-2" />
            </div>

            <div className="flex items-center max-w-xl bg-gray-200 rounded-md w-full h-full">
                <input 
                    className="flex-grow p-1 bg-transparent outline-none"
                    type="text"
                    placeholder="Buscar..."
               
                />
                <button type="submit" className="flex items-center justify-center px-4 border-l h-full">
                    <SearchIcon /> {}
                </button>
            </div>

            <div>    
                <UserIcon /> 
            </div>
        </div>
    );
};

export default SearchBar;
