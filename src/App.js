import { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx"
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.css';

export const AppContext = createContext();

function App() {
  const [showEaster360, setShowEaster360] = useState(false);

  return (
      <AppContext.Provider value={[showEaster360, setShowEaster360]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />            
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
  );
}

export default App;
