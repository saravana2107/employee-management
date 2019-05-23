import React from "react";
import renderer from "react-test-renderer";
import Table, { TableColumn } from "../Table";

describe("Table", () => {
  it("should display list", () => {
    const data = [
      {
        id: "ALTI123456",
        name: "Test User #1",
        email: "test+1@altimetric.com",
        phone: "9876543210",
        address: "Kudlu Gate",
        city: "Bangalore",
        state: "Karnataka",
        zipcode: "560068",
        gender: "Male"
      }
    ];

    const component = renderer.create(
      <Table data={data} notFoundText="No Employees Found">
        <TableColumn field="id">ID</TableColumn>
        <TableColumn field="name">Name</TableColumn>
        <TableColumn field="email">Email</TableColumn>
        <TableColumn field="phone">Phone</TableColumn>
        <TableColumn field="address">Address</TableColumn>
        <TableColumn field="city">City</TableColumn>
        <TableColumn field="state">State</TableColumn>
        <TableColumn field="zipcode">ZipCode</TableColumn>
        <TableColumn field="gender">Gender</TableColumn>
        <TableColumn
          field="action"
          renderField={row => (
            <div>
              <i className="fas fa-edit" />
              <i className="fas fa-trash" />
            </div>
          )}
        >
          Action
        </TableColumn>
      </Table>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should display not found text if data is empty", () => {
    const component = renderer.create(
      <Table data={[]} notFoundText="No Employees Found">
        <TableColumn field="id">ID</TableColumn>
        <TableColumn field="name">Name</TableColumn>
        <TableColumn field="email">Email</TableColumn>
        <TableColumn field="phone">Phone</TableColumn>
        <TableColumn field="address">Address</TableColumn>
        <TableColumn field="city">City</TableColumn>
        <TableColumn field="state">State</TableColumn>
        <TableColumn field="zipcode">ZipCode</TableColumn>
        <TableColumn field="gender">Gender</TableColumn>
        <TableColumn
          field="action"
          renderField={row => (
            <div>
              <i className="fas fa-edit" />
              <i className="fas fa-trash" />
            </div>
          )}
        >
          Action
        </TableColumn>
      </Table>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should display default not found text if data is empty", () => {
    const component = renderer.create(
      <Table data={[]}>
        <TableColumn field="id">ID</TableColumn>
        <TableColumn field="name">Name</TableColumn>
        <TableColumn field="email">Email</TableColumn>
        <TableColumn field="phone">Phone</TableColumn>
        <TableColumn field="address">Address</TableColumn>
        <TableColumn field="city">City</TableColumn>
        <TableColumn field="state">State</TableColumn>
        <TableColumn field="zipcode">ZipCode</TableColumn>
        <TableColumn field="gender">Gender</TableColumn>
        <TableColumn
          field="action"
          renderField={row => (
            <div>
              <i className="fas fa-edit" />
              <i className="fas fa-trash" />
            </div>
          )}
        >
          Action
        </TableColumn>
      </Table>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
