import logo from "./logo.png";
import "./App.css";
import Navbar from "./Component/navbar";
import Footer from "./Component/Footer";
import Jumbotron from "./Component/Jumbotron";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">

        {/* Jumbotron */}
        <Jumbotron />

      </div>
      <Footer />
    </>
  );
}

export default App;
