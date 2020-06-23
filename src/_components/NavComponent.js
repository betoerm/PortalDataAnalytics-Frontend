import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default () => {
    return(       
        <header>
            <Navbar expand="lg" style={{width: '100%', backgroundColor: '#14145a', paddingButton: '5rem'}}>
                <div className="container d-flex justify-content-between">
                    <Navbar.Brand href="#home"><Link className="link" to = "/" style={{color: 'white'}}>Portal Data & Analytics</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">                    
                            <Link to="/toolcreate"  className="link" style={{color: 'white'}}>Catalogar Ferramenta</Link>
                        </Nav>
                        <Button variant="outline-warning"><Link to="/login">Sair</Link></Button>            
                    </Navbar.Collapse>
                </div>
            </Navbar>           
        </header>
    )
}
