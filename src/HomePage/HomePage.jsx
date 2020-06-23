import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CardDeck } from 'react-bootstrap';
import FilterResults from 'react-filter-search';

import {  toolActions } from '../_actions';
import  ToolItem from "../_components/ToolItem";
import NavComponent from '../_components/NavComponent';
import { toolService } from '../_services';
 
class HomePage extends React.Component { 
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = { 
            data: [],       
            value: '',
            _isMounted: false   
        }       
    }    

    componentDidMount() {        
        this.setState({_isMounted: true});    
                
        if (this.state)            
           //this.props.getAll();        
           toolService.getAll().then(
            result => { this.setState({data: result}) }
        )    
    } 

    componentWillUnmount() {
        this.setState({_isMounted: false});   
    }   

    handleChange(e) {              
        this.setState({
            value: e.target.value         
        })
      };      

    render() {
        //const { user, tools } = this.props;          
        //const user = this.props;          
        const { data, value }  = this.state;
        
        return (
            <div>               
                <NavComponent/>
                <div className="container" style={{color: '#14145a'}}>
                    <div className="row"> 
                        <div className="col-sm">
                            <h1 className="display-4"> Catálogo</h1>                       
                            <p className="display-5">Encontre produtos e serviços.</p>
                        </div>

                        <div className="col-sm"> 
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"
                                    value = {value} onChange={ this.handleChange}                                
                                />                              
                            </form>
                        </div>
                    </div>
                    
                    <hr className="border-bottom shadow-sm"/>       
                    
                <div className="row">
                {data.loading && <em>Carregando catálogo...</em>}
                {data.error && <span className="text-danger">ERRO: {data.error}</span>}         
                <FilterResults                        
                        value={value}
                        data={data}
                        renderResults={results => (
                            <div>
                            <ul  style={{listStyleType:"none"}}  >
                                <CardDeck>
                                    {results.map(el => (
                                    <div>
                                        <li key = {el.id} style={{padding: "6px"}}>
                                            <ToolItem tool = { el }/>
                                        </li>
                                    </div>
                                    ))}
                                </CardDeck>
                            </ul>
                            </div>
                        )}
                />                          
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
