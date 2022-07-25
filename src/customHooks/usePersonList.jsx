import { useEffect, useState } from "react";
import { getPersonList } from "../utils/getPersonList";

function usePersonList() {
  const [personList, setPersonList] = useState([]);

  useEffect(() => {
    async function getList() {
      let list = await getPersonList();
      setPersonList(list);
    }
    getList();
  }, []);

  return personList;
}

export default usePersonList;
