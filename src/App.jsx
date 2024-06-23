import Navbar from "./componenets/Navbar/navbar";
import Hero from "./componenets/Hero/hero";
import Program from "./componenets/Programs/program";
import Title from "./componenets/Title/title";
import About from "./componenets/About/about";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title="What we Offer" />
        <Program />
        <About/>
      </div>
    </div>
  );
}

export default App;
