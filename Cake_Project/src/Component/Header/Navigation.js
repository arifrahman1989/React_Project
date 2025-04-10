import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    }

    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
        return (
            <div>
                <Navbar color="" light expand="md">
                    <div className='container' style={{background:'purple', margin:'auto', padding:'10px'}}>
                        <NavbarToggler onClick={this.navToggle} />
                        <NavbarBrand href="/">Natural Food</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <Link to="/" className='nav-link active'>Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/menu" className='nav-link' >Menu</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/order" className='nav-link'>Order</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/contacts" className='nav-link'>Contact</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>

                </Navbar>
            </div>
        );
    }

}

export default Navigation;