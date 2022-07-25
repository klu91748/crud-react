import { useState } from "react";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { addPerson } from "../utils/addPerson";

function AddPersonPopup() {
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  function handleSubmit() {
    console.log("hi");
    addPerson(name, phoneNumber);
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
              Name
              <input
                pattern=".{1,50}"
                required
                title="1 to 50 characters"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
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
            <input type="submit" value="Submit" />
          </form>
        </div>
      </Popup>
    </div>
  );
}

export default AddPersonPopup;
