import React from "react";
import { Field, reduxForm } from "redux-form";
import validator from "validator";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Row,
  Col,
  FormGroup,
  Input,
  FormFeedback,
  Label
} from "reactstrap";
import { add } from "../actions/employees";
import { connect } from "react-redux";

/**
 * Validation
 *
 * @param values
 * @param state
 * @returns {{}}
 */
const validate = (values, state) => {
  const errors = {};

  if (!values.id) {
    errors.id = true;
  } else if (!values.id.toUpperCase().startsWith("ALTI")) {
    errors.id = "Must be starts with ALTI";
  } else {
    const idNumber = values.id.toUpperCase().split("ALTI");
    const id = idNumber && idNumber.length > 1 ? idNumber[1] : null;

    if (!id || !validator.isNumeric(id) || id.length !== 6) {
      errors.id = "Must be 6 numbers";
    } else if (!state.isEdit && state.employees.data[values.id]) {
      errors.id = "Employee Already Exist with same ID";
    }
  }

  if (!values.name) {
    errors.name = true;
  } else if (values.name.length < 5) {
    errors.name = "Must be 5 characters";
  } else if (values.name.length > 100) {
    errors.name = "Must be 100 characters or less";
  }

  if (!values.gender) {
    errors.gender = true;
  }

  if (!values.email) {
    errors.email = true;
  } else if (!validator.isEmail(values.email)) {
    errors.email = "Invalid Email";
  }

  if (!values.phone) {
    errors.phone = true;
  } else if (parseInt(values.phone, 10).toString().length !== 10) {
    errors.phone = "Invalid Phone";
  }

  if (!values.address) {
    errors.address = true;
  }

  if (!values.city) {
    errors.city = true;
  }

  if (!values.state) {
    errors.state = true;
  }

  if (!values.zipcode) {
    errors.zipcode = true;
  } else if (parseInt(values.zipcode, 10).toString().length !== 6) {
    errors.zipcode = "Invalid Zip Code";
  }

  return errors;
};

/**
 * Field Render
 *
 * @param input
 * @param label
 * @param options
 * @param type
 * @param disabled
 * @param touched
 * @param error
 */
const renderField = ({
  input,
  label,
  options,
  type,
  disabled,
  meta: { touched, error }
}) => (
  <FormGroup>
    <Label for="exampleEmail">{label}</Label>
    {type === "select" && options && options.length > 0 && (
      <Input
        {...input}
        placeholder={label}
        type={type}
        invalid={touched && !!error}
      >
        <option>Select</option>
        {options.map((option, key) => (
          <option key={key} value={option}>
            {option}
          </option>
        ))}
      </Input>
    )}
    {type !== "select" && (
      <Input
        {...input}
        placeholder={label}
        type={type}
        disabled={disabled}
        invalid={touched && !!error}
      />
    )}
    {touched && error && typeof error === "string" && (
      <FormFeedback tooltip style={{ top: "calc(100% - 1rem)" }}>
        {error}
      </FormFeedback>
    )}
  </FormGroup>
);

const EmployeeForm = props => {
  const { handleSubmit, submitting, onToggle, isEdit } = props;

  const closeBtn = (
    <button className="close" onClick={onToggle}>
      &times;
    </button>
  );

  return (
    <Modal isOpen={true} toggle={onToggle} size="lg" backdrop="static">
      <ModalHeader close={closeBtn}>
        {isEdit ? "Edit" : "Add"} Employee
      </ModalHeader>
      <form onSubmit={handleSubmit(values => props.add(values, isEdit))}>
        <ModalBody>
          <Row form>
            <Col md={4}>
              <Field
                name="id"
                type="text"
                component={renderField}
                label="ID"
                disabled={isEdit}
              />
            </Col>
            <Col md={4}>
              <Field
                name="name"
                type="text"
                component={renderField}
                label="Name"
              />
            </Col>
            <Col md={4}>
              <Field
                name="gender"
                type="select"
                component={renderField}
                options={["Male", "Female"]}
                label="Gender"
              />
            </Col>
          </Row>

          <Row form>
            <Col md={6}>
              <Field
                name="email"
                type="email"
                component={renderField}
                label="Email"
              />
            </Col>
            <Col md={6}>
              <Field
                name="phone"
                type="text"
                component={renderField}
                label="Phone"
              />
            </Col>
          </Row>

          <Field
            name="address"
            type="text"
            component={renderField}
            label="Address"
          />

          <Row form>
            <Col md={4}>
              <Field
                name="city"
                type="text"
                component={renderField}
                label="City"
              />
            </Col>
            <Col md={4}>
              <Field
                name="state"
                type="text"
                component={renderField}
                label="State"
              />
            </Col>
            <Col md={4}>
              <Field
                name="zipcode"
                type="text"
                component={renderField}
                label="Zip Code"
              />
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <p className="m-0 w-100">
            <Button color="secondary" onClick={onToggle}>
              Close
            </Button>
            <Button
              type="submit"
              className="float-right"
              color="primary"
              disabled={submitting}
            >
              {isEdit ? "Update" : "Create"}
            </Button>
          </p>
        </ModalFooter>
      </form>
    </Modal>
  );
};

const EmployeeReduxForm = reduxForm({
  form: "employeeForm",
  validate
})(EmployeeForm);

export default connect(
  ({ employees }) => ({
    initialValues:
      employees.employeeId && employees.data[employees.employeeId]
        ? employees.data[employees.employeeId]
        : {},
    isEdit: employees.employeeId && employees.data[employees.employeeId],
    employees
  }),
  { add }
)(EmployeeReduxForm);
