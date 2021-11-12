import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar
                style={{ backgroundColor: 'rgba(33,33,33,0.95)' }}
                variant='dark'
                expand='lg'
                collapseOnSelect>
                <Container style={{ maxWidth: '92%' }}>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            <div>
                                <img
                                    src='http://nonamakeup.com/wp-content/uploads/2021/10/Nona-name-160-w.png'
                                    alt='logo'
                                />
                            </div>
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav style={{ marginLeft: '40px' }}>
                            <LinkContainer to='/'>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='#'>
                                <Nav.Link>Shop</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/about'>
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav style={{ marginLeft: 'auto' }}>
                            <LinkContainer to='/cart'>
                                <Nav.Link>
                                    <i className='fas fa-shopping-cart' /> Cart
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                                <Nav.Link>
                                    <div>
                                        <i className='fas fa-user' /> Sign In
                                    </div>
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
