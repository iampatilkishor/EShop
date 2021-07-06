import "./styles/App.css";
import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./core/header";
import Paper from '@material-ui/core/Paper';


import Routes from './routes';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />

      <Paper className="main-container">
        <Routes />
      </Paper>
    </>
  );
}

export default App;
