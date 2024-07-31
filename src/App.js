import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './pages/home/home';
import RecipeDetailsPage from './pages/details/details';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage/>} />
          <Route path='/recipe-details' element={<RecipeDetailsPage/>} />                  
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
