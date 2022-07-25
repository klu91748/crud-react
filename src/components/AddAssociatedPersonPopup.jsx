import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Table from "react-bootstrap/Table";
import { addAssociatedPerson } from "../utils/addAssociatedPerson";
import usePersonList from "../customHooks/usePersonList";

function AddAssociatedPersonPopup(props) {
  const personList = usePersonList();

  function addPerson(personId) {
    //addAssociatedPerson(props.clientId, personId);
  }

  return (
    <div>
      <Popup trigger={<button className="btn btn-Primary">Add</button>}>
        <div>
          <Table className="table table-striped table-bordered table-dark mx-auto w-25">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {personList.map((person, i) => {
                return (
                  <tr key={i}>
                    <td>{person.name}</td>
                    <td>{person.phoneNumber}</td>
                    <td>
                      {" "}
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          addPerson(person.id);
                        }}
                      >
                        Add
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Popup>
    </div>
  );
}

export default AddAssociatedPersonPopup;
