import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Main from './components/Main';
import PokemonDetails from './components/PokemonDetails';
import Header from './components/Header';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/api/:idPokemon' element={<PokemonDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
