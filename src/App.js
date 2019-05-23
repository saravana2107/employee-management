import React from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import { Container, Button } from "reactstrap";
import { connect } from "react-redux";
import { toggleModal } from "./actions/employees";

class App extends React.Component {
  render() {
    return (
      <Container fluid className="my-5">
        <div className="d-flex mb-3 align-items-center">
          <div className="flex-fill">
            <h5 className="m-0">Employees</h5>
          </div>
          <div className="flex-fill bd-highlight">
            <Button
              color="info"
              className="float-right"
              onClick={this.props.toggleModal.bind(this)}
            >
              <i className="fas fa-plus" /> Add Employee
            </Button>
          </div>
        </div>

        <EmployeeList />

        {this.props.modal && (
          <EmployeeForm onToggle={this.props.toggleModal.bind(this)} />
        )}
      </Container>
    );
  }
}

export default connect(
  ({ employees }) => ({
    modal: employees.modal
  }),
  { toggleModal }
)(App);
