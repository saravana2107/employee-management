import React from "react";
import Table, { TableColumn } from "./Table";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { del, toggleModal } from "../actions/employees";

class EmployeeList extends React.Component {
  render() {
    const {
      employees: { data: employees }
    } = this.props;

    const data = [];
    Object.keys(employees).forEach(employee => data.push(employees[employee]));

    return (
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
              <Button
                color="primary"
                size="sm"
                className="mr-2"
                onClick={() => this.props.toggleModal(row.id)}
              >
                <i className="fas fa-edit" />
              </Button>
              <Button
                color="danger"
                size="sm"
                onClick={() => this.props.del(row.id)}
              >
                <i className="fas fa-trash" />
              </Button>
            </div>
          )}
        >
          Action
        </TableColumn>
      </Table>
    );
  }
}

export default connect(
  ({ employees }) => ({
    employees
  }),
  { del, toggleModal }
)(EmployeeList);
