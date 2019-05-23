import {
  CREATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  TOGGLE_EMPLOYEE_MODAL
} from "../constants/ActionTypes";

import _ from "lodash";

export function employees(
  state = {
    modal: false,
    data: {},
    employeeId: null
  },
  action
) {
  switch (action.type) {
    case CREATE_EMPLOYEE:
      return Object.assign({}, state, {
        modal: false,
        data: Object.assign({}, state.data, {
          [action.payload.id]: action.payload
        })
      });
    case DELETE_EMPLOYEE:
      return Object.assign({}, state, {
        modal: false,
        data: _.omit(state.data, action.payload)
      });
    case TOGGLE_EMPLOYEE_MODAL:
      return Object.assign({}, state, {
        modal: !state.modal,
        employeeId: action.payload
      });
    default:
      return state;
  }
}
