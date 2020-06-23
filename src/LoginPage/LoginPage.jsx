import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import { Container, Form, FormGroup, Button } from 'react-bootstrap';

import logo from '../_assets/images/nature.svg';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="container">                                
                <form className="form-signin" name="form" onSubmit={this.handleSubmit}>                   
                    <h2 className="display">Efetuar login no Portal Data & Analytics</h2>
                    <p>Não tem uma conta? <Link to="/register">Registre-se</Link></p>


                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Usuário</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} required autoFocus/> 
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Senha</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} required autoFocus/>                        
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-lg btn-outline">Entrar</button>
                        {loggingIn}                        
                    </div>
                    
                </form>                             
           
              
                <style jsx="true">{`
                        
                        .container{
                            display: flex;
                            top: 75%;
                            left: 50%;
                            margin-top: 5%;                            
                        }

                        h1, .form-group {
                            color: #14145a;
                        }
                        .btn{
                            background-color: #14145a;
                            color: white;
                            width: 18rem;
                            padding-rigth: 5px;
                        }
                        .display{
                            font-size: 3.5rem;
                            font-weight: 300;
                            line-height: 1.2;
                        }
                        @media (min-width: 576px){
                            .display{                                
                                font-size: 4.0rem;
                                font-weight: 300;
                                line-height: 1.2;
                            }      
                            
                            .form-signin{
                                width: 60%
                            }

                            .form-group{
                                width: 50%
                            }
                        }

                        

                `}</style>   
            </div>          
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };