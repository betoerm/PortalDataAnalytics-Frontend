import { toolConstants } from '../_constants';

export function creation(state = {}, action) {
  switch (action.type) {
    case toolConstants.CREATE_REQUEST:
      return { creating: true };
    case toolConstants.CREATE_SUCCESS:
      return {};
    case toolConstants.CREATE_FAILURE:
      return {};
    default:
      return state
  }
}