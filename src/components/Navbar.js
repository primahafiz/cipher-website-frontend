import React, { Component } from 'react'
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import StandardVigenere from '../pages/StandardVigenere'
import AutoKeyVigenere from '../pages/AutoKeyVigenere'
import ExtendedVigenere from '../pages/ExtendedVigenere'
import Affine from '../pages/Affine'
import Playfair from '../pages/Playfair'
import Hill from '../pages/Hill'
import Enigma from '../pages/Enigma';
import About from '../pages/About'
import Home from '../pages/Home'

import Logo from '../assets/logo.png'

export default class NavBarComp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand as={Link} to="/">
                                <img src={Logo} alt="CryptoCalc" width="40" height="40" className="d-inline-block align-top" />
                                CryptoCalc
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <NavDropdown title="Vigenere Cipher" id="collasible-nav-dropdown">
                                        <NavDropdown.Item as={Link} to="/standardvigenere">Standard Vigenere Cipher</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/autokeyvigenere">Auto-Key Vigenere Cipher</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/extendedvigenere">Extended Vigenere Cipher (ASCII)</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link as={Link} to="/affine">Affine Cipher</Nav.Link>
                                    <Nav.Link as={Link} to="/playfair">Playfair Cipher</Nav.Link>
                                    <Nav.Link as={Link} to="/hill">Hill Cipher</Nav.Link>
                                    <Nav.Link as={Link} to="/enigma">Enigma Cipher</Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                        <Route path="/standardvigenere" element={<StandardVigenere />} />
                        <Route path="/autokeyvigenere" element={<AutoKeyVigenere />} />
                        <Route path="/extendedvigenere" element={<ExtendedVigenere />} />
                        <Route path="/affine" element={<Affine />} />
                        <Route path="/playfair" element={<Playfair />} />
                        <Route path="/hill" element={<Hill />} />
                        <Route path="/enigma" element={<Enigma />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </Router>
        )
    }
}