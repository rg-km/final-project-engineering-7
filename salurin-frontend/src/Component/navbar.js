import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import logo from './../logo.png';

// Import react router dom for navigate to different end points;
import { Link } from 'react-router-dom';

function navbar() 
{
    return(
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
                    <Button className='btn btn-light mx-2'>
                        {/* Endpoint to login page */}
                        <Link to='/login' className='text-decoration-none'>Sign In</Link>
                    </Button>
                    <Button className='btn btn-success'>
                        {/* Endpoint to Register page */}
                        <Link to='/register' className='text-decoration-none'>Sign Up</Link>
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default navbar;