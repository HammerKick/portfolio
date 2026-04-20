import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { CV } from "./pages/CV";
import { Projects } from "./pages/Projects";
import { Navbar } from "./bars/Navbar";
import { Footer } from "./bars/Footer";

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <div className="flex flex-col min-h-screen">
        <div className="bg-gray-100">
          <Navbar />
        </div>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
