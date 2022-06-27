import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Dropdown, Image, NavDropdown, MenuItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import logo from './../logo.png';

// Import react router dom for navigate to different end points;
import { Link } from 'react-router-dom';
import './navbar.css';

function navbar() {
    return (
        <Navbar className='border-bottom bg-white nav-bar' sticky='top' inverse collapseOnSelect expand='lg'>
            <Container>
                <Navbar.Brand href='/'>
                    <img
                        src={logo}
                        width="100"
                        className="d-inline-block align-top mb-2"
                        alt="Salurin"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='me-auto navigation'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/campaign'>Campaign</Nav.Link>
                        <Nav.Link href="/stories">Stories</Nav.Link>
                        <Nav.Link href="#home">Team</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    {/* <Button className='btn mx-2 p-2'  variant='outline-light'> */}
                    {/* Endpoint to login page */}
                    {/* <Link to='/login' className='text-decoration-none text-dark p-3'>Sign In</Link> */}
                    {/* </Button> */}
                    {/* <Button className='btn btn-success p-2'> */}
                    {/* Endpoint to Register page */}
                    {/* <Link to='/register' className='text-decoration-none text-light p-3'>Sign Up</Link> */}
                    {/* </Button> */}
                    <Dropdown className='mt-2'>
                        <Dropdown.Toggle className='bg-white' variant='white' id="dropdown-basic">
                            <Image src='https://salurin-backend.herokuapp.com/images/3-Group 21.png' width={35}></Image>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">My campaign</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">My Story</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Log out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default navbar;