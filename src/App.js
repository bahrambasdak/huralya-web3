import logo from "./logo.svg";
import "./App.scss";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>

    <div className="App">
     
     
    <BrowserRouter>
     <Header />
      <Content />
      
     
      <Footer />
    </BrowserRouter>
    </div>

    </>
  );
}

export default App;
