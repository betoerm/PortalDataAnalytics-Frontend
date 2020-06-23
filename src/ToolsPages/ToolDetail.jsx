import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { toolService } from "../_services";
import { history } from "../_helpers";

import NavComponent from '../_components/NavComponent';

function ToolDetail(item){

    const initialState = {
        id: null,
        name: "",
        designation: "",
        location: ""
    };

    const [tool, setTool ] = useState(initialState);

    useEffect(() => {
        toolService.getById(item.match.params.id).then(
            result => { setTool(result) }
        );
    });

    const onDelete = e => {
        e.preventDefault();
        toolService.delete(tool.id);
        history.push("/");
      };
    

    return (        
        <div>            
            <NavComponent/>
            <div>
                <h1 className="display-4">{tool.title}</h1>                 
                <h2>Recursos</h2>
                <p>{ tool.description }</p>
                
                <Link to={`/toolupdate/${tool.id}`}>Editar</Link>          
                <Link to="/" className="btn btn-link">Voltar</Link>            
            </div>                    
        </div>
    )
}



export default connect(
    undefined
  )(ToolDetail);  



