import axios from "axios";
import ServiceUtils from "./ServiceUtils";

export async function getPersonList() {
  let response = await axios.get(ServiceUtils.personList);
  let personList = [];

  for (let i = 0; i < response.data.length; i++) {
    personList.push(response.data[i]);
  }
  return personList;
}
