import Table from "react-bootstrap/Table";
import usePersonList from "../customHooks/usePersonList";
import ViewPersonPopup from "./ViewPersonPopup";
import EditPersonPopup from "./EditPersonPopup";
import AddPersonPopup from "./AddPersonPopup";
import { deletePerson } from "../utils/deletePerson";

function PersonTable() {
  const personList = usePersonList();

  function deleteRow(id) {
    deletePerson(id);
    window.location.reload(false);
  }

  return (
    <div>
      <Table className="table table-striped table-bordered mx-auto w-25">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>
              <AddPersonPopup />
            </th>
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
                  <ViewPersonPopup person={person} />
                </td>
                <td>
                  <EditPersonPopup person={person} />
                </td>
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
    </div>
  );
}

export default PersonTable;
