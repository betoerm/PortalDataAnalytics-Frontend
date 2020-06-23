import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button} from 'react-bootstrap';

export default ({tool}) => {
    return(                   
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <div className="card-header" id="header"><strong>{tool.title}</strong></div>
                <div className="card-body">
                    <p className="card-text">{ tool.description }</p>                    
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            
                                <Link to={`/tooldetail/${tool.id}`} className="btn btn-sm btn-outline-secondary">Detalhes</Link>
                                <Link to={`/toolupdate/${tool.id}`} className="btn btn-sm btn-outline-secondary">Editar</Link>
                            
                        </div>                        
                    </div>
                </div>
            </div>

            <style jsx="true">{`
                        #header {
                            background-color: #14145a;
                            color: white;
                        }
                        .card{
                            width:18rem;
                            height: 18rem;
                        }                  
                `}</style> 
        </div>
    )
}



 
