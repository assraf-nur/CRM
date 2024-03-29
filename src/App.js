import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MiniDrawer from "./Components/Navbar/Sidebar";
import './Components/CSS/Style.css'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <MiniDrawer />
    </div>
  );
}

export default App;
