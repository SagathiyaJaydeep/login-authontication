import "./App.css";
import { Route, Routes } from "react-router";
import Singup from "./Pages/Singup";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin">
          <Route path="signup" element={<Singup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
