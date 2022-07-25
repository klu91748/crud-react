import axios from "axios";
import ServiceUtils from "./ServiceUtils";

export async function deleteAssociatedClient(personId, clientId) {
  let response = await axios.delete(ServiceUtils.personclient + personId, {
    data: { id: clientId },
  });

  return response;
}
