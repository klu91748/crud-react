import axios from "axios";
import ServiceUtils from "./ServiceUtils";

export async function addAssociatedPerson(clientId, personId) {
  let response = await axios.post(ServiceUtils.clientperson + clientId, {
    id: personId,
  });

  return response;
}
