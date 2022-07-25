import axios from "axios";
import ServiceUtils from "./ServiceUtils";

export async function addClient(companyName, url, phoneNumber, address) {
  let response = await axios.post(ServiceUtils.client, {
    companyName: companyName,
    url: url,
    phoneNumber: phoneNumber,
    address: address,
  });
  return response;
}
