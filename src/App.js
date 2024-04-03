import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Categories from "./Components/Categories";
import Rankings from "./Components/Rankings";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";  


function App() {
  return (
    <div className="App"> 
    
      <Home />
      <Categories/>
      <About />
      <Rankings />
      <Contact />
      <Footer /> 
      
     
    </div>
  );
}

export default App;
