 import SearchBar from './components/SearchBar';
 import MachinesList from './pages/MachineList';
 import MachineInfo from './pages/MachineInfo';
 import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div className='bg-primary'>
          <SearchBar></SearchBar>
            <Routes>
              <Route path="/machines" element={<MachinesList />} />
              <Route path="/machines/:id" element={<MachineInfo />} />
              <Route path="/" element={<Navigate to="/machines" />} />
            </Routes>
          
      </div>
    </Router>
    
  )
}

export default App
