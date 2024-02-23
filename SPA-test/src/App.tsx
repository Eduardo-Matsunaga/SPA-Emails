// Importa os componentes necessários do react-router-dom e React
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importa os componentes de páginas e de navegação
import Home from './pages/home';
import Navbar from './components/navbar';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App() {
  return (
    // Utiliza o BrowserRouter para gerenciar as rotas
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
