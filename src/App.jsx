import Routes from "./routes/Routes";
import Header from "./components/header/Header";
import { BackToTop, Overlay } from "./utils";
import Sidebar from "./components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import Footer from "./components/footer/Footer";
import Footers from "./components/footers/Footers";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if(isSidebarOpen === true){
      document.body.style.overflow = "hidden"
    }
    else{
      document.body.style.overflow = "auto"
    }
  }, [isSidebarOpen])

  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <Routes/>
      <BackToTop/>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <Footer/>
      <Footers/>
      { isSidebarOpen && <Overlay setIsSidebarOpen={setIsSidebarOpen}/>}
    </>
  );
}

export default App;
