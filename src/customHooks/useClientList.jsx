import { useEffect, useState } from "react";
import { getClientList } from "../utils/getClientList";

function useClientList() {
  const [clientList, setClientList] = useState([]);

  useEffect(() => {
    async function getList() {
      let list = await getClientList();
      setClientList(list);
    }
    getList();
  }, []);

  return clientList;
}

export default useClientList;
