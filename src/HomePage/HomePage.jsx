import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, CardDeck, Jumbotron} from 'react-bootstrap';

import {  toolActions } from '../_actions';
import  ToolItem from "../_components/ToolItem";
import NavComponent from '../_components/NavComponent';

import { Card } from 'react-bootstrap';


class HomePage extends React.Component {    

    componentDidMount() {
        this.props.getAll();        
    } 

    render() {
        const { user, tools } = this.props;                    
        return (
            <div> 
                <NavComponent/>
                <div className="container-fluid" style = {{paddingTop: '5rem'}}>
                    <div className="row">
                        {tools.loading && <em>Carregando catálogo...</em>}
                        {tools.error && <span className="text-danger">ERRO: {tools.error}</span>}              
                        {tools.items && 
                            <ul  style={{listStyleType:"none"}}  >
                                <CardDeck>
                                    { tools.items.map((tool, index) => (
                                        <li key = {tool.id} style={{padding: '5px'}}>
                                            <ToolItem tool = { tool }/>
                                        </li>
                                    ))}
                                </CardDeck>
                            </ul>                         
                        }          
                    </div>   
                </div>               
            </div>
        );
    }
}

function mapState(state) {
    const { tools, authentication} = state;
    const { user } = authentication;
    return { user, tools };
}

const actionCreators = {
    getAll: toolActions.getAll
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };