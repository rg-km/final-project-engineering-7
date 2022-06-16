import logo from "./logo.png";
import "./App.css";
import Navbar from "./Component/navbar";
import Footer from "./Component/Footer";
import Jumbotron from "./Component/Jumbotron";
import Feature from "./Component/Feature";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">

        {/* Jumbotron */}
        <Jumbotron />

        {/* Feature */}
        <Feature />

      </div>
      <Footer />
    </>
  );
}

export default App;
