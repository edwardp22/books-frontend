import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button, TextField } from "@mui/material";

import { booksPost, booksPut } from "../../state";

import classes from "../../styles/booksEditor.module.css";

export default function Editor() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { books } = useSelector((state) => state.books);
  const [book, setBook] = useState({ name: "", author: "" });

  useEffect(() => {
    setBook(books.find((book) => +book.id === +params.bookId));
  }, [books, params]);

  const saveBook = () => {
    if (!book || !book.name) return;

    if (book?.id) dispatch(booksPut(book.id, book));
    else dispatch(booksPost(book));

    navigate("/");
  };

  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item xs={11} className={classes.content}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              autoFocus
              required
              name="name"
              label="Name"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              onChange={(e) => setBook({ ...book, name: e.target.value })}
              value={book?.name ?? ""}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name="author"
              label="Author"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              onChange={(e) => setBook({ ...book, author: e.target.value })}
              value={book?.author ?? ""}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name="publishingYear"
              label="Year of Publication"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              onChange={(e) =>
                setBook({ ...book, publishingYear: e.target.value })
              }
              value={book?.publishingYear ?? ""}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              name="ISBN"
              label="ISBN"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              onChange={(e) => setBook({ ...book, ISBN: e.target.value })}
              value={book?.ISBN ?? ""}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid container item xs={1} className={classes.buttons}>
        <Grid item xs={6}>
          <Button
            variant="contained"
            className={classes.buttonCancel}
            fullWidth
            onClick={() => navigate("/")}
          >
            Cancel
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button
            variant="contained"
            className={classes.buttonSave}
            fullWidth
            onClick={() => saveBook()}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
