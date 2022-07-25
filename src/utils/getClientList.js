import axios from "axios";
import ServiceUtils from "./ServiceUtils";

export async function getClientList() {
  let response = await axios.get(ServiceUtils.clientList);
  let clientList = [];

  for (let i = 0; i < response.data.length; i++) {
    clientList.push(response.data[i]);
  }
  return clientList;
}
