import { BrowserRouter } from "react-router-dom";
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
        <div className="bg-linear-to-r from-[#0f1525] to-[#1c2a40] sticky top-0 z-50">
          <Navbar />
        </div>
        <main className="flex-1">
          <Home id="home" />
          <CV id="cv" />
          <Projects id="projects" />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
