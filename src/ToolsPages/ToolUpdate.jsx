import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, CardDeck} from 'react-bootstrap';

import { toolService } from "../_services";
import {  toolActions } from '../_actions';

import NavComponent from '../_components/NavComponent';


class ToolUpdate extends React.Component {     
    constructor(){
        super();

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeProvedor = this.onChangeProvedor.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {                
            title: '',
            description: '',
            provedor: '',
            type: '',
            location: '',
        }
    }

    componentDidMount() {        
        toolService.getById(this.props.match.params.id).then(
            result => { this.setState(result) }
        )                          
    } 


    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })  
    }
    onChangeProvedor(e) {
        this.setState({
            provedor: e.target.value
        })
    }

    onChangeType(e) {
        this.setState({
            type: e.target.value
        })
    }

    onChangeLocation(e) {
        this.setState({
            location: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.update(this.state);                
        this.props.history.push(`/tooldetail/${this.state.id}`);
      }

    render() {  
        const item = this.state;
        return (
            <Container>
                <NavComponent/>
                <div style={{ marginTop: 10 }}>
                    <h3 align="center">Atualizar dados</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Título:  </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={ item.title }
                                onChange={ this.onChangeTitle }
                            />
                        </div>
                        
                        <div className="form-group">
                            <label>Descrição: </label>
                            <input type="text" 
                                className="form-control"
                                value={ item.description }
                                onChange={this.onChangeDescription}
                            />
                        </div>

                        <div className="form-group">
                            <label>Provedor: </label>
                            <input type="text" 
                                className="form-control"
                                value={ item.provedor }
                                onChange={this.onChangeProvedor}
                            />
                        </div>

                        <div className="form-group">
                            <label>Type: </label>
                            <input type="text" 
                                className="form-control"
                                value={ item.type }
                                onChange={this.onChangeType}
                            />
                        </div>

                        <div className="form-group">
                            <label>Localização: </label>
                            <input type="text" 
                                className="form-control"
                                value={ item.location }
                                onChange={this.onChangeLocation}
                            />
                        </div>
                    
                        <div className="form-group">
                            <button className="btn btn-primary">Atualizar</button>
                             
                            <Link to="/" className="btn btn-link">Cancelar</Link>
                        </div>
                    </form>        
                </div>                
            </Container>
        );
    }
}

function mapState(state) {
    const { tool } = state;    
    return { tool };
}

const actionCreators = {
    getById: toolActions.getById,
    update: toolActions.update   
}

const connectedToolUpdate = connect(mapState, actionCreators)(ToolUpdate);
export { connectedToolUpdate as ToolUpdate };