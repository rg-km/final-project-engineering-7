import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import logo from './../logo.png';

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
    )
}

export default navbar;