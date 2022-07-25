import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Table from "react-bootstrap/Table";
import AddAssociatedPersonPopup from "./AddAssociatedPersonPopup";
import { deleteAssociatedPerson } from "../utils/deleteAssociatedPerson";

function ViewClientPopup(props) {
  function deleteRow(personId) {
    deleteAssociatedPerson(props.client.id, personId);
    window.location.reload(false);
  }

  return (
    <div>
      <Popup trigger={<button className="btn btn-secondary">View</button>}>
        <h1>Contacts: </h1>

        <Table className="table table-striped table-bordered table-dark mx-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>
                <AddAssociatedPersonPopup clientId={props.client.id} />
              </th>
            </tr>
          </thead>
          <tbody>
            {props.client.persons.map((persons, i) => {
              return (
                <tr key={i}>
                  <td>{persons.name}</td>
                  <td>{persons.phoneNumber}</td>
                  <td>
                    {" "}
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        deleteRow(persons.id);
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

export default ViewClientPopup;
