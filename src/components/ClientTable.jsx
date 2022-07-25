import Table from "react-bootstrap/Table";
import useClientList from "../customHooks/useClientList";
import { deleteClient } from "../utils/deleteClient";
import AddClientPopup from "./AddClientPopup";
import ViewClientPopup from "./ViewClientPopup";
import EditClientPopup from "./EditClientPopup";

function ClientTable() {
  let clientList = useClientList();

  function deleteRow(id) {
    deleteClient(id);
    window.location.reload(false);
  }

  return (
    <div>
      <Table className="table table-striped table-bordered mx-auto w-50">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>URL</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>
              <AddClientPopup />
            </th>
            <th></th>
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
                  <ViewClientPopup client={client} />
                </td>
                <td>
                  <EditClientPopup client={client} />
                </td>
                <td>
                  {" "}
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      deleteRow(client.id);
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
    </div>
  );
}

export default ClientTable;
