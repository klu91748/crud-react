import axios from "axios";
import ServiceUtils from "./ServiceUtils";

export async function deleteClient(id) {
  let response = await axios.delete(ServiceUtils.client + id);

  return response;
}
