import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function Routing() {
  return (
    <Routes>
      <Route exact path="" element={<Home />} />
      {/* <Route exact path=":planet" element={<Residents />} />
      <Route exact path="/:planet/:residents" element={<ResidentDetail />} /> */}
    </Routes>
  );
}

export default Routing;
