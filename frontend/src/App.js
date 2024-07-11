import "bootstrap/dist/css/bootstrap.min.css";
import Signup from './Signup'
import {HashRouter, Routes,Route} from 'react-router-dom';
import Login from './Login';



import CreateFitness from './component/CreateFitness.js';
import FitnessList from './component/FitnessList.js';
import EditFitness from './component/EditFitness.js';
import Nav from './component/Nav.js';


function App() {
  const style= {
    backgroundImage: 'url(image2.jpg)',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center'};

  return (
    <div style={style}>
    <HashRouter>
      <Nav />
    <Routes>
      <Route path='/register' element={<Signup />} /> 
      <Route path='/login' element={<Login />} />  
      
          
          <Route path='/create-fitness' element={<CreateFitness />} />
          <Route path='/fitness-list' element={<FitnessList />} />
          <Route path="/edit-fitness/:id" element={<EditFitness />} />

     
    </Routes>

    </HashRouter>
    
    </div>
  )
}

export default App;