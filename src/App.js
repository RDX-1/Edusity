import Navbar from "./componenets/Navbar/navbar"
import Hero from "./componenets/Hero/hero"
import Program from "./componenets/Programs/program";

function App() {
  return (
    <div className="App">
      <Navbar/>    
      <Hero/>
      <div className="container">
        <Program/>
      </div>
    </div>
  );
}

export default App;
