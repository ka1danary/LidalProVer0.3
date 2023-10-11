import Header from "./components/header/Header";
import { Route, Routes} from 'react-router-dom'
import "./App.sass"
import "./reset.sass"
import Home from "./pages/home/Home";
import Download from "./pages/download/Download";
import View from "./pages/view/View";
import Experiment from "./pages/experiment/Experiment";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/download" element={<Download/>} />
        <Route path="/view" element={<View/>}/>
        <Route path="/experiment" element={<Experiment/>}/>
      </Routes>
    </div>
  );
}

export default App;
