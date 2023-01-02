import { Route, Routes } from "react-router-dom";
import "./App.css";

import Profile from "./pages/Profile";
import Home from "./pages/Home";
import CreateForm from "./pages/Posts/Create";
import React from "react";
import AppRoutes from "./routes/Routes";

export interface AppContext{
  baseUrl?: string;
}

const BASE_URL:string = "https://us-central1-mbtcandidate.cloudfunctions.net";


export const MyAppContext = React.createContext<AppContext>({});

const initialContext: AppContext = {
  baseUrl:BASE_URL
}

function App() {
  return(
  <>
  <MyAppContext.Provider value={ initialContext }>
    <AppRoutes/>
  </MyAppContext.Provider>
  </>
  )
}

export default App;


      