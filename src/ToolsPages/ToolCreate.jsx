import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Container, Form} from 'react-bootstrap';
import { toolActions } from '../_actions';
import NavComponent from '../_components/NavComponent';

class ToolCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tool: {
                title: '',
                description: '',
                provedor: '',
                type: '',
                location: '',
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        const { name, value } = event.target;
        const { tool } = this.state;
        this.setState({
            tool: {
                ...tool,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { tool } = this.state;
        if (tool.title && tool.description && tool.provedor) {
            this.props.create(tool);
        }
    }

    render() {
        const { creating } = this.props;
        const { tool, submitted } = this.state;
        return (     
            <div>
                <NavComponent/>
                <h2 className="display-4 text-center">Cadastrar</h2>

                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && tool.title ? ' has-error' : '')}>
                        <label htmlFor="title">Título</label>
                        <input type="text" className="form-control" name="title" value={tool.title} onChange={this.handleChange} required/>
                        {submitted && !tool.title &&
                            <div className="help-block">Título é requerido.</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !tool.description ? ' has-error' : '')}>
                        <label htmlFor="description">Descrição</label>
                        <textarea type="text" className="form-control" name="description" value={tool.description} onChange={this.handleChange} required/>
                        {submitted && !tool.description &&
                            <div className="help-block">Descrição é requerida.</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !tool.provedor ? ' has-error' : '')}>
                        <label htmlFor="username">Provedor</label>
                        <input type="text" className="form-control" name="provedor" value={tool.provedor} onChange={this.handleChange} required/>
                        {submitted && !tool.provedor &&
                            <div className="help-block">Provedor é requerido.</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !tool.type ? ' has-error' : '')}>
                        <label htmlFor="username">Tipo</label>
                        <input type="text" className="form-control" name="type" value={tool.type} onChange={this.handleChange} required/>
                        {submitted && !tool.type &&
                            <div className="help-block">Tipo é requerido.</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !tool.location ? ' has-error' : '')}>
                        <label htmlFor="username">Localização</label>
                        <input type="text" className="form-control" name="location" value={tool.location} onChange={this.handleChange} required/>
                        {submitted && !tool.location &&
                            <div className="help-block">Localização é requerida.</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Salvar</button>
                        {creating}
                        <Link to="/" className="btn btn-link">Cancelar</Link>
                    </div>

                </form>
            </div>
        );
    }
}

function mapState(state) {
    const { creating } = state.creation;
    return { creating };
}

const actionCreators = {
    create: toolActions.create
}

const connectedToolCreate = connect(mapState, actionCreators)(ToolCreate);
export { connectedToolCreate as ToolCreate };