import './App.css';
import Main from './Components/Pages/Main.tsx';
import Navigation from './Components/Navigation.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catch from './Components/Pages/Catch.tsx';
import Types from './Components/Pages/Types.tsx';
function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Navigation />}>
        
          <Route  path="main" element={<Main />} />
         
          <Route  path="types" element={<Types />} />
          <Route  path="catched" element={<Catch />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
