import {Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage"
import Scan from "./pages/Scan"

function App() {
  return (
    <>
    <nav className="h-12 font-['Roboto'] text-2xl flex flex-row justify-center items-center shadow-lg"><div>QR Code scanner</div></nav>
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/scan" element={<Scan />}></Route>
    </Routes>
    </>
  );
}


export default App;
