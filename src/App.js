import Login from "./components/Login";
import ReportInfo from "./components/ReportInfo";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Report" element={<ReportInfo />} />
      </Routes>
    </div>
  );
}

export default App;
