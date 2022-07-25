import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Table from "react-bootstrap/Table";
import { deleteAssociatedClient } from "../utils/deleteAssociatedClient";

function ViewPersonPopup(props) {
  function deleteRow(clientId) {
    deleteAssociatedClient(props.person.id, clientId);
    window.location.reload(false);
  }

  return (
    <div>
      <Popup trigger={<button className="btn btn-secondary">View</button>}>
        <h1>Clients:</h1>
        <Table className="table table-striped table-bordered table-dark mx-auto">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>URL</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.person.clients.map((person, i) => {
              return (
                <tr key={i}>
                  <td>{person.companyName}</td>
                  <td>{person.url}</td>
                  <td>{person.phoneNumber}</td>
                  <td>{person.address}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        deleteRow(person.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Popup>
    </div>
  );
}

export default ViewPersonPopup;
