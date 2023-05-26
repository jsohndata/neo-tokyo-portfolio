import { useState, createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx"
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.css';

export const AppContext = createContext();

function App() {
  const [showEaster360, setShowEaster360] = useState(false);

  return (
      <AppContext.Provider value={[showEaster360, setShowEaster360]}>
        <BrowserRouter>
          <Homepage />
        </BrowserRouter>
      </AppContext.Provider>
  );
}

export default App;
