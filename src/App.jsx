import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ChatBot } from "./chat";
import { Router } from "./router";

const App = () => {
  return (
    <>
      <ChatBot />
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Router /> {/* Renderiza o Router que contém suas rotas */}
      </div>
      <Footer />
    </>
  );
};

export default App;
