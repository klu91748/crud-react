import { useState } from "react";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { editClient } from "../utils/editClient";

function EditClientPopup(props) {
  const [companyName, setCompanyName] = useState(props.client.companyName);
  const [url, setUrl] = useState(props.client.url);
  const [phoneNumber, setPhoneNumber] = useState(props.client.phoneNumber);
  const [address, setAddress] = useState(props.client.address);

  function handleSubmit() {
    editClient(props.client.id, companyName, url, phoneNumber, address);
  }

  return (
    <div>
      <Popup trigger={<button className="btn btn-warning">Edit</button>}>
        <div>
          <form
            onSubmit={() => {
              handleSubmit();
            }}
          >
            <label>
              Company Name:
              <input
                type="text"
                defaultValue={props.client.companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </label>
            <label>
              URL:
              <input
                type="url"
                defaultValue={props.client.url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </label>
            <label>
              Phone Number:
              <input
                type="text"
                defaultValue={props.client.phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                defaultValue={props.client.address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </Popup>
    </div>
  );
}

export default EditClientPopup;
