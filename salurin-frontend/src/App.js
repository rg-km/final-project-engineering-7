import Footer from './Component/Footer'
import logo from './logo.png';
import './App.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div className='App'>
      <Navbar className='border-bottom'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="160"
              className="d-inline-block align-top"
              alt="Salurin"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Nav className='me-auto'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Campaign</Nav.Link>
            <Nav.Link href="#home">Stories</Nav.Link>
            <Nav.Link href="#home">Team</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            {/* <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text> */}
            <Button className='btn btn-light mx-2'>
              Sign In
            </Button>
            <Button className='btn btn-success'>
              Sign Up
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
