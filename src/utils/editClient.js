import axios from "axios";
import ServiceUtils from "./ServiceUtils";

export async function editClient(id, companyName, url, phoneNumber, address) {
  let response = await axios.put(ServiceUtils.client, {
    id: id,
    companyName: companyName,
    url: url,
    phoneNumber: phoneNumber,
    address: address,
  });
  return response;
}
