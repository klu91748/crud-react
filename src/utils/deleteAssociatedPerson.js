import axios from "axios";
import ServiceUtils from "./ServiceUtils";

export async function deleteAssociatedPerson(clientId, personId) {
  let response = await axios.delete(ServiceUtils.clientperson + clientId, {
    data: { id: personId },
  });

  return response;
}
