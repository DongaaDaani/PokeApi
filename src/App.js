
import Main from './Components/Pages/Main.tsx';
import Navigation from './Components/Navigation.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catch from './Components/Pages/Pokemon/CatchedPokemons.tsx';
import PokemonTypesMenu from './Components/Pages/Pokemon/PokemonTypesMenu.tsx';
function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Navigation />}>
          <Route  path="main" element={<Main />} />
          <Route  path="types" element={<PokemonTypesMenu />} />
          <Route  path="catched" element={<Catch />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
