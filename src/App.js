import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './pages/home/home';
import RecipeDetailsPage from './pages/details/details';
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
