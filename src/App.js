import React, { useState } from "react";
import { LoginPage } from "./login/login";
import { Sponsors } from "./components/sponsors/sponsors";
import { Students } from "./components/students/students";
import { Dashboard } from "./components/dashboard";
import { AdminPage } from "./components/admin";
import { ModalSponsor } from "./components/sponsors/sponsor";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Leyout } from "./components/leyout";
import store from "./components/store";
import { AddStudent } from "./components/students/addStudent";
import { InfoStudent } from "./components/students/infoStudent";
function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  return (
    <Provider store={store}>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route
          path="admin"
          element={<Leyout setSearch={setSearch} setFilter={setFilter} />}
        >
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route
            path="sponsors"
            element={<Sponsors search={search} filter={filter} />}
          />
          <Route
            path="students"
            element={<Students search={search} filter={filter} />}
          />
        </Route>
        <Route path="sponsors/:id" element={<ModalSponsor />} />
        <Route path="students/:id" element={<InfoStudent />} />
        <Route path="addStudent" element={<AddStudent />} />
      </Routes>
    </Provider>
  );
}

export default App;
