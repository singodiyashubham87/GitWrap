import Homepage from "./pages/Homepage";
import StatsPage from "./pages/StatsPage";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage/>}/>
        <Route path="/stats" element={<StatsPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
