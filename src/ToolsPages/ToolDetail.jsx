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
        title: '',
        description: '',
        provedor: '',
        type: '',
        location: ''
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
            <div className="Container">
                <h1 className="display-4">{tool.title}</h1>                 
                
                <div className="row">                     
                    <p>Tipo: <strong> { tool.type }</strong></p> 
                   
                </div>
                <hr></hr>
                <h2>Recursos</h2>
                
                <p>Descrição: { tool.description }</p>
                <p>Provedor: { tool.provedor }</p>
               
                <p>Localização: { tool.location }</p>

                <div className="form-group">
                    <Link to={`/toolupdate/${tool.id}`} className="btn btn-primary">Editar</Link>
                    
                    <Link to="/" className="btn btn-link">Voltar</Link>
                </div>          
            </div> 

            
        </div>
    )
}



export default connect(
    undefined
  )(ToolDetail);  



