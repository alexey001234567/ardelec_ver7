// App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import HomePage from './pages/homePage';
import CompanyAbout from './pages/company';
import ActivitiesPowerGeneration from './pages/activites/powerGeneration';
import ActivitiesEnergyStorage from './pages/activites/energyStorage';
import ActivitiesSpecialPowerSupply from './pages/activites/powerSupply';
import ActivitiesSoftwareDevelopment from './pages/activites/softwareDevelop';
import ActivitiesEngineeringConsulting from './pages/activites/engeenerCons/engeenerCons';
import EngineeringDistribution from './pages/activites/engeenerCons/engeenerConsDistribution';
import EngineeringIndustrial from './pages/activites/engeenerCons/engeenerConsIndustrial';
import Contacts from './pages/contacts';


function App() {
  return (
    <Routes>
      {/* Layout оборачивает все страницы */}
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />} />  
        <Route path="company" element={<CompanyAbout />} />
        <Route path="/activities/power-generation" element={<ActivitiesPowerGeneration/>} />
        <Route path="/activities/energy-storage" element={<ActivitiesEnergyStorage/>} />
        <Route path='/activities/special-power-supply' element={<ActivitiesSpecialPowerSupply/>}/>
        <Route path='/activities/software-development' element={<ActivitiesSoftwareDevelopment/>}/>
        <Route path='/activities/engineering-consulting' element={<ActivitiesEngineeringConsulting/>}/>
        <Route path='/activities/engineering-consulting/disribution' element={<EngineeringDistribution/>}/>
        <Route path='/activities/engineering-consulting/industrial' element={<EngineeringIndustrial/>}/>
        <Route path='contact' element={<Contacts/>}/>
      </Route>
    </Routes>
  );
}

export default App;
