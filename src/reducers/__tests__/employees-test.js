import {
  CREATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  TOGGLE_EMPLOYEE_MODAL
} from "../../constants/ActionTypes";
import * as reducer from "../employees";

describe("employees reducer", () => {
  const employeeData = {
    id: "ALTI123456",
    name: "Test User #1",
    email: "test+1@altimetric.com",
    phone: "9876543210",
    address: "Kudlu Gate",
    city: "Bangalore",
    state: "Karnataka",
    zipcode: "560068",
    gender: "Male"
  };

  it(`${TOGGLE_EMPLOYEE_MODAL} should set modal to true`, () => {
    const newState = reducer.employees(
      {
        modal: false
      },
      { type: TOGGLE_EMPLOYEE_MODAL }
    );

    expect(newState).toEqual({
      modal: true
    });
  });

  it(`${TOGGLE_EMPLOYEE_MODAL} should set modal to false`, () => {
    const newState = reducer.employees(
      {
        modal: true
      },
      { type: TOGGLE_EMPLOYEE_MODAL }
    );

    expect(newState).toEqual({
      modal: false
    });
  });

  it(`${TOGGLE_EMPLOYEE_MODAL} should set employee id and modal to true`, () => {
    const newState = reducer.employees(
      {
        modal: false,
        employeeId: null
      },
      { type: TOGGLE_EMPLOYEE_MODAL, payload: employeeData.id }
    );

    expect(newState).toEqual({
      modal: true,
      employeeId: employeeData.id
    });
  });

  it(`${CREATE_EMPLOYEE} should add employee`, () => {
    const newState = reducer.employees(
      {
        data: {}
      },
      {
        type: CREATE_EMPLOYEE,
        payload: employeeData
      }
    );

    expect(newState.data).toEqual({
      [employeeData.id]: employeeData
    });
  });

  it(`${CREATE_EMPLOYEE} should delete employee`, () => {
    const newState = reducer.employees(
      {
        data: {
          [employeeData.id]: employeeData
        }
      },
      {
        type: DELETE_EMPLOYEE,
        payload: employeeData.id
      }
    );

    expect(newState.data).toEqual({});
  });
});
