import { useState } from "react";
import Editor from "./pages/books/Editor";
import List from "./pages/books/List";
import classes from "./styles/global.module.css";

function App() {
  const [book, setBook] = useState();

  const page = () => {
    if (book) {
      return <Editor bookDisplay={book} onSave={() => setBook(undefined)} />;
    }

    return (
      <List
        onClickNew={() => setBook({ id: 0 })}
        onClickBook={(book) => setBook(book)}
      />
    );
  };

  return <div className={classes.App}>{page()}</div>;
}

export default App;
