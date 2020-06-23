import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div className="Container">
            
                <h1 className="display-4">Portal Data & Analytics</h1>
                <h2>Registrar-se</h2>

                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">Nome</label>
                        <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} required/>
                        {submitted && !user.firstName &&
                            <div className="help-block">Informe o nome.</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                        <label htmlFor="lastName">Sobrenome</label>
                        <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} required/>
                        {submitted && !user.lastName &&
                            <div className="help-block">Informe um sobrenome.</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                        <label htmlFor="username">Usuário</label>
                        <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} required/>
                        {submitted && !user.username &&
                            <div className="help-block">Informe um nome de usuário.</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Senha</label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} required/>
                        {submitted && !user.password &&
                            <div className="help-block">Cadastre uma senha.</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Salvar</button>
                        {registering}

                        <Link to="/login" className="btn-link">Cancelar</Link>
                    </div>
                </form>
                
                <style jsx="true">{`
                        
                        .container{
                            display: flex;
                            top: 75%;
                            left: 50%;
                            margin-top: 5%;                            
                        }

                        h1, h2, .form-group {
                            color: #14145a;
                        }

                        h2{
                            font-size: 3.0rem;
                            font-weight: 300;
                            line-height: 1.2;
                        }
                        .btn{
                            background-color: #14145a;
                            color: white;                                                        
                        }   
                        
                        .btn-link{
                            color: #14145a;
                            padding-left: 1rem;
                        }
                            
                            .form-signin{
                                width: 60%
                            }
                            
                        }
                `}</style>   
            </div>


        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };