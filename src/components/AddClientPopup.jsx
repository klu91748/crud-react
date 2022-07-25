import { useState } from "react";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { addClient } from "../utils/addClient";

function AddClientPopup() {
  const [companyName, setCompanyName] = useState();
  const [url, setUrl] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();

  function handleSubmit() {
    addClient(companyName, url, phoneNumber, address);
  }

  return (
    <div>
      <Popup trigger={<button className="btn btn-primary">Add</button>}>
        <div>
          <form
            onSubmit={() => {
              handleSubmit();
            }}
          >
            <label>
              Company Name:
              <input
                pattern=".{1,50}"
                required
                title="1 to 50 characters"
                type="text"
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </label>
            <label>
              URL:
              <input type="url" onChange={(e) => setUrl(e.target.value)} />
            </label>
            <label>
              Phone Number:
              <input
                pattern=".{10,10}"
                required
                title="Please enter a valid phone number"
                type="text"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                pattern=".{1,50}"
                required
                title="1 to 50 characters"
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

export default AddClientPopup;
