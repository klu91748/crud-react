import axios from "axios";
import ServiceUtils from "./ServiceUtils";

export async function addPerson(name, phoneNumber) {
  let response = await axios.post(ServiceUtils.person, {
    name: name,
    phoneNumber: phoneNumber,
  });
  return response;
}
