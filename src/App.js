import React from "react";

import { Routes, Route } from "react-router-dom";

import Editor from "./pages/books/Editor";
import List from "./pages/books/List";

import classes from "./styles/global.module.css";

//Server to heroku
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "build")));

app.listen(port, () => console.log(`App is live on port ${port}!`));
//Server to heroku

function App() {
  return (
    <div className={classes.App}>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/:bookId" element={<Editor />} />
        <Route path="*" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
