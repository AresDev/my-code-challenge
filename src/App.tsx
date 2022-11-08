import { Route, Routes } from "react-router-dom";
import "./App.css";

import Profile from "./components/Profile";
import Home from "./components/Home";
import CreateForm from "./components/Posts/Create";

function App() {
  return (
    <>
      <Routes>
        <Route path="posts">
          <Route index element={<Home />}></Route>
          <Route
            path="create/:id"
            element={<CreateForm action="create" />}
          ></Route>
          <Route path=":id" element={<Profile />}></Route>
        </Route>

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
