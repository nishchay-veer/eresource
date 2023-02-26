import Link from 'next/link';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Routes } from '../lib/types';

export default function Header() {
  return (
    <Navbar bg="light" expand="lg" className="sticky-top">
      <Container>
        <Link href={Routes.HOME} passHref>
<<<<<<< Updated upstream
          <Navbar.Brand>Decentralized Energy Trading App</Navbar.Brand>
=======
          <Navbar.Brand className='text-light'>Eresource</Navbar.Brand>
>>>>>>> Stashed changes
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href={Routes.HOME} passHref>
              <Nav.Link>Dashboard</Nav.Link>
            </Link>
            <Link href={Routes.PROPERTIES} passHref>
              <Nav.Link>Current Sources</Nav.Link>
            </Link>
            <Link href={Routes.energy_CREATE} passHref>
              <Nav.Link>Create Energy Source</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
