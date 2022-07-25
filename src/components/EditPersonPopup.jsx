import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Table from "react-bootstrap/Table";
import useClientList from "../customHooks/useClientList";
import { addAssociatedClient } from "../utils/addAssociatedClient";

function EditClientPopup(props) {
  let clientList = useClientList();

  function addClient(clientId) {
    addAssociatedClient(props.person.id, clientId);
    window.location.reload(false);
  }

  return (
    <div>
      <Popup trigger={<button className="btn btn-warning">Edit</button>}>
        <div>
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
              {clientList.map((client, i) => {
                return (
                  <tr key={i}>
                    <td>{client.companyName}</td>
                    <td>{client.url}</td>
                    <td>{client.phoneNumber}</td>
                    <td>{client.address}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          addClient(client.id);
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

export default EditClientPopup;
