import { Route, Routes, BrowserRouter } from "react-router-dom";
import TelaPrincipal from "./Componentes/Telas/TelaPrincipal";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      {
        //antes
        //http://localhost:3000/

        //depois
        //http://localhost:3000/projetoeleicoes2024
      }
        <BrowserRouter basename="/CorrecaoProvaBCC1B">
            <Routes>
                <Route path="/" element={<TelaPrincipal />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
