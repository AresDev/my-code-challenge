import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CreateForm from '../pages/Posts/Create';
import Profile from '../pages/Profile';

const AppRoutes = ()=>{
    const helloWorld = <h1>HolaMundo</h1>;
    return(
        <Routes>
        <Route path="posts">
          <Route index element={<Home/>}></Route>
          <Route
            path=":id/new"
            element={<CreateForm action="new" />}
          ></Route>
           <Route
            path=":id/edit"
            element={<CreateForm action="edit" />}
          ></Route>
          {/* <Route path=":id" element={<Profile />}></Route> */}
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
    )
}

export default AppRoutes;