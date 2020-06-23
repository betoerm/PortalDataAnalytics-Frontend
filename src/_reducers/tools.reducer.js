import { toolConstants } from '../_constants';

export function tools(state = {}, action){    

    switch (action.type) {
        case toolConstants.GETALL_REQUEST:
        return {
            loading: true
        };
        case toolConstants.GETALL_SUCCESS:
        return {
            items: action.tools
        };
        case toolConstants.GETALL_FAILURE:
        return { 
            error: action.error
        };

        case toolConstants.UPDATE_REQUEST:
            return{
                ...state,
                items: state.items.map(tool =>
                tool.id === action.id
                    ? { ...tool, udpate: true }
                    : tool
                )
            };
        case toolConstants.UPDATE_SUCCESS:
            return{
                items: action.tools
            };
        case toolConstants.UPDATE_FAILURE:
            return { ...tool, deleteError: action.error };

        case toolConstants.DELETE_REQUEST:
        // add 'deleting:true' property to user being deleted
        return {
            ...state,
            items: state.items.map(tool =>
            tool.id === action.id
                ? { ...tool, deleting: true }
                : tool
            )
        };
        case toolConstants.DELETE_SUCCESS:
        // remove deleted user from state
        return {
            items: state.items.filter(tool => tool.id !== action.id)
        };
        case toolConstants.DELETE_FAILURE:
        // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
        return {
            ...state,
            items: state.items.map(tool => {
            if (tool.id === action.id) {
                // make copy of user without 'deleting:true' property
                const { deleting, ...toolCopy } = tool;
                // return copy of user with 'deleteError:[error]' property
                return { ...toolCopy, deleteError: action.error };
            }
    
            return tool;
            })
        };
        default:
        return state
    } 
}