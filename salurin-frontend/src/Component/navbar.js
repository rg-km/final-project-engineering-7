import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import logo from './../logo.png';

// Import react router dom for navigate to different end points;
import { Link } from 'react-router-dom';
import './navbar.css';

function navbar() 
{
    return(
        <Navbar className='border-bottom bg-white nav-bar' sticky='top' inverse collapseOnSelect>
            <Container>
                <Navbar.Brand href='/'>
                    <img
                    src={logo}
                    width="100"
                    className="d-inline-block align-top mb-2"
                    alt="Salurin"
                    />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Nav className='me-auto'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/campaign'>Campaign</Nav.Link>
                    <Nav.Link href="#home">Stories</Nav.Link>
                    <Nav.Link href="#home">Team</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Button className='btn btn-light mx-2'>
                        {/* Endpoint to login page */}
                        <Link to='/login' className='text-decoration-none text-dark p-3'>Sign In</Link>
                    </Button>
                    <Button className='btn btn-success'>
                        {/* Endpoint to Register page */}
                        <Link to='/register' className='text-decoration-none text-light p-3'>Sign Up</Link>
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default navbar;