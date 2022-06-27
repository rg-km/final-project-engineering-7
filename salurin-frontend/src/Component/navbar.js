import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import logo from './../logo.png';
import userLogo from './../Assets/user-icon.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
 
// Import react router dom for navigate to different end points;
import { Link } from 'react-router-dom';
import './navbar.css';
 
function Auth()
{
    // Check localStorage token
    let storage = localStorage.getItem('token')
 
    if(storage !== null)
    {
        let users = localStorage.getItem('user')
        return (
            <>
                <div className='d-flex align-items-center justify-content-between'>
                    <NavDropdown 
                        title= { 
                            <Navbar.Text>
                                Hello, <a href="/" className='text-decoration-none fw-bolder mr-3'>{users.split('"')}</a>
                            </Navbar.Text>
                        } 
                        id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Menu</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Dashboard
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                    <img src={userLogo} />
                </div>
            </>
        )
    }
    else
    {
        return (
            <>
                <Button className='btn mx-2 p-2'  variant='outline-light'>
                    {/* Endpoint to login page */}
                    <Link to='/login' className='text-decoration-none text-dark p-3'>Sign In</Link>
                </Button>
                <Button className='btn btn-success p-2'>
                    {/* Endpoint to Register page */}
                    <Link to='/register' className='text-decoration-none text-light p-3'>Sign Up</Link>
                </Button>
            </>
        )
    }
}
 
function navbar() 
{
    return(
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
                    {Auth()}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
 
export default navbar;
