import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default () => {
    return(     
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">Portal Data & Analytics</h5>
            <nav className="my-2 my-md-0 mr-md-3">
            <p className="p-2 text-dark"><Link to="/toolcreate">Catalogar Ferramenta</Link></p>            
            </nav>
            <Link to="/login" className="btn btn-outline-primary">Sair</Link>
        </div>
    )
}
