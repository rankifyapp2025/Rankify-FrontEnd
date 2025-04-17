import logo from './logo.svg';
import './App.css';
import RoutesPage from './Routes/Routes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
    <RoutesPage/>
    <ToastContainer />
    </div>
  );
}

export default App;
