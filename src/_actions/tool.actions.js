import { toolConstants } from "../_constants";
import { alertActions } from "./alert.actions";
import { toolService } from "../_services";
import { history } from '../_helpers';

export const toolActions = {
    create,
    getAll,
    getById,
    update,
    delete: _delete 
};

function create(tools) {
    return dispatch => {
        dispatch(request(tools));

        toolService.create(tools)
            .then(
                tool => { 
                    dispatch(success());
                    history.push('/');
                    dispatch(alertActions.success('Cadastrado com sucesso'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(tools) { return { type: toolConstants.CREATE_REQUEST, tools } }
    function success(tools) { return { type: toolConstants.CREATE_SUCCESS, tools } }
    function failure(error) { return { type: toolConstants.CREATE_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        toolService.getAll()
            .then(
                tools => dispatch(success(tools)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: toolConstants.GETALL_REQUEST } }
    function success(tools) { return { type: toolConstants.GETALL_SUCCESS, tools } }
    function failure(error) { return { type: toolConstants.GETALL_FAILURE, error } }
}

function getById(id){
    return dispatch => {
        dispatch(request(id));

        toolService.getById(id)
            .then(
                tool => dispatch(success(tool)),                    
                error => dispatch(failure(error.toString()))
            );  
    };

    function request(id) { return { type: toolConstants.GETALL_REQUEST, id } }
    function success(tool) { return { type: toolConstants.GETALL_SUCCESS, tool } }
    function failure(error) { return { type: toolConstants.GETALL_FAILURE, error } }
}

function update(tools){
    return dispatch => {
        dispatch(request(tools));

        toolService.update(tools)
            .then(
                tool => {
                    dispatch(success(tools));
                    dispatch(alertActions.success("Atualizado com sucesso"));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: toolConstants.UPDATE_REQUEST } }
    function success(tools) { return { type: toolConstants.UPDATE_SUCCESS, tools } }
    function failure(error) { return { type: toolConstants.UPDATE_FAILURE, error } }
}

function _delete(id){

    return dispatch => {
        dispatch(request(id));

        toolService.delete(id)
            .then(
                tool => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}
