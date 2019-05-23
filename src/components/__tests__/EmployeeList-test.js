import React from "react";
import renderer from "react-test-renderer";
import EmployeeList from "../EmployeeList";
import { Provider } from "react-redux";

function mockStore(state) {
  return {
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => state,
    mapDispatchToProps: () => {},
    mapStateToProps: () => {}
  };
}

let store;

const employees = {
  modal: false,
  data: {
    ALTI123456: {
      id: "ALTI123456",
      name: "Test User #1",
      email: "test+1@altimetric.com",
      phone: "9876543210",
      address: "Kudlu Gate",
      city: "Bangalore",
      state: "Karnataka",
      zipcode: "560068",
      gender: "Male"
    },
    ALTI123457: {
      id: "ALTI123457",
      name: "Test User #2",
      email: "test+2@altimetric.com",
      phone: "9876543211",
      address: "Kudlu Gate",
      city: "Bangalore",
      state: "Karnataka",
      zipcode: "560068",
      gender: "Male"
    }
  }
};

describe("Employees", () => {
  it("should display employees list", () => {
    store = mockStore({ employees });

    const component = renderer.create(
      <Provider store={store}>
        <EmployeeList />
      </Provider>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
