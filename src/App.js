import React from "react";

import { Routes, Route } from "react-router-dom";

import Editor from "./pages/books/Editor";
import List from "./pages/books/List";

import classes from "./styles/global.module.css";

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
