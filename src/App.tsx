import { Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import Users from "./components/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="users">
          <Route index element={<Users />}></Route>
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
