import axios from "axios";
import ServiceUtils from "./ServiceUtils";

export async function addAssociatedClient(personId, clientId) {
  let response = await axios.post(ServiceUtils.personclient + personId, {
    id: clientId,
  });
  return response;
}
