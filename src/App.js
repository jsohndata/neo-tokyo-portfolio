import { BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx"
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.css';


function App() {
  return (
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
  );
}

export default App;
