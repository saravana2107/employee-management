import React from "react";
import { Table } from "reactstrap";

export const TableColumn = () => {};

export default class TableComponent extends React.Component {
  render() {
    const { children: columns, data, notFoundText } = this.props;

    return (
      <Table striped responsive>
        <thead className="thead-light">
          <tr>
            {React.Children.map(columns, x => {
              return x && <th>{x.props.children}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="text-center">
                {notFoundText || "No Results Found"}
              </td>
            </tr>
          )}
          {data.map((detail, key) => {
            return (
              <tr key={key}>
                {React.Children.map(columns, (x, index) => {
                  return index === 0 ? (
                    <th scope="row" className="align-middle">
                      {x.props.renderField
                        ? x.props.renderField(detail)
                        : detail[x.props.field]}
                    </th>
                  ) : (
                    <td className="align-middle">
                      {x.props.renderField
                        ? x.props.renderField(detail)
                        : detail[x.props.field]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}
