import logo from './logo.png';
import './App.css';

// We use react router dom version 6, so Switch replaced with Routes
// Import react router dom package
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom';

// Import component
// import Home component
import Home from './Component/Home';
// Import Navbar component
import Navbar from './Component/navbar';
// Import Footer Component
import Footer from './Component/Footer';

// Import Auth component
// Import Register component
import RegisterForm from './Auth/RegisterForm';
// import Login component
import LoginForm from './Auth/LoginForm';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        
        {/* This is router for navigate to end point */}
        <Routes>
          {/* This is home/root folder this app */}
          <Route path='/' component={<Home/>} /> 

          {/* This is Register route for register page */}
          <Route path='/register' component={<RegisterForm />} />

          {/* This is Login route for login page */}
          <Route path='/login' component={<LoginForm />} />
        </Routes>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
