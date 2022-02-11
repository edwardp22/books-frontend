import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Grid, Button } from "@mui/material";
import MaterialTable from "@material-table/core";
import { Delete, Edit } from "@material-ui/icons";

import { booksGet, booksDelete } from "../../state";

import classes from "../../styles/booksList.module.css";
import Dialog from "../../components/dialog/Dialog";

export default function List({ onClickNew, onClickBook }) {
  const dispatch = useDispatch();
  const { books, isLoading } = useSelector((state) => state.books);
  const [deletingBook, setDeletingBook] = useState(undefined);

  useEffect(() => {
    dispatch(booksGet());
  }, [dispatch]);

  const deleteBook = (book) => {
    dispatch(booksDelete(book?.id));
    setDeletingBook(undefined);
  };

  return (
    <Grid container direction="column" className={classes.container}>
      <Dialog
        open={!!deletingBook}
        title="Deleting a Book"
        titleStyle="warning"
        message={`Are you sure about deleting the book ${deletingBook?.name}`}
        button1Text="Confirm Delete"
        button1Click={() => deleteBook(deletingBook)}
        button2Text="Cancel"
        button2Click={() => setDeletingBook(undefined)}
      />

      <Grid container item xs={1} className={classes.buttons}>
        <Button variant="contained" fullWidth onClick={() => onClickNew()}>
          New Book
        </Button>
      </Grid>

      <Grid container item xs={11} className={classes.content}>
        <MaterialTable
          title="List of Books"
          options={{ paging: false, searchFieldStyle: { maxWidth: 200 } }}
          isLoading={isLoading}
          data={books}
          columns={[
            { title: "Name", field: "name", type: "string" },
            { title: "Author", field: "author", type: "string" },
            {
              title: "Year of Publish",
              field: "publishingYear",
              type: "numeric",
            },
            {
              title: "ISBN",
              field: "ISBN",
              type: "numeric",
            },
          ]}
          actions={[
            {
              icon: () => <Delete />,
              tooltip: "Delete Book",
              onClick: (event, rowData) => setDeletingBook(rowData),
            },
            {
              icon: () => <Edit />,
              tooltip: "Edit Book",
              onClick: (event, rowData) => onClickBook(rowData),
            },
          ]}
        />
      </Grid>
    </Grid>
  );
}
