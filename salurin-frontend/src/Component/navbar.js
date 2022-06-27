import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Dropdown, Image, NavDropdown, MenuItem } from 'react-bootstrap';
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
        let users = JSON.stringify(localStorage.getItem('user'))
        return (
            <>
                <div className='d-flex align-items-center justify-content-between'>
                    <NavDropdown 
                        title= { 
                            <Navbar.Text>
                                Hello, <a href="/">{users.substring(1, users.length -1)}</a>
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

function navbar() {
  return(
                    {Auth()}
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