import {
  CREATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  TOGGLE_EMPLOYEE_MODAL
} from "../constants/ActionTypes";
import { toast } from "react-toastify";

/**
 * Employee Create
 *
 * @param payload
 * @returns {{type, payload: *}}
 */
export function add(payload) {
  toast.success("Employee Created Successfully", {
    hideProgressBar: false
  });
  return { type: CREATE_EMPLOYEE, payload };
}

/**
 * Employee Delete
 *
 * @param payload
 * @returns {{type, payload: *}}
 */
export function del(payload) {
  toast.success("Employee Deleted Successfully", {
    hideProgressBar: false
  });
  return { type: DELETE_EMPLOYEE, payload };
}

/**
 * Toggle Modal
 *
 * @param payload
 * @returns {{type, payload: *}}
 */
export function toggleModal(payload = null) {
  return { type: TOGGLE_EMPLOYEE_MODAL, payload };
}
