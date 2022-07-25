import axios from "axios";
import ServiceUtils from "./ServiceUtils";

export async function deletePerson(id) {
  let response = await axios.delete(ServiceUtils.person + id);
  console.log(response);
  return response;
}
