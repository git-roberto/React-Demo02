import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Inicio from './pages/Inicio';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>

        {/* Define as rotas da aplicação */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
