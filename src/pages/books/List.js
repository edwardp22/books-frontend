import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Grid, Button } from "@material-ui/core";
import MaterialTable from "@material-table/core";

import { booksGet } from "../../state";

import classes from "../../styles/booksList.module.css";

export default function List({ onClickNew, onClickBook }) {
  const dispatch = useDispatch();
  const { books, isLoading } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(booksGet());
  }, [dispatch]);

  return (
    <Grid container direction="column" className={classes.container}>
      <Grid container item xs={11} className={classes.content}>
        <MaterialTable
          title="List of Books"
          options={{ paging: false, searchFieldStyle: { maxWidth: 200 } }}
          isLoading={isLoading}
          onRowClick={(e, rowData) => onClickBook(rowData)}
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
        />
      </Grid>

      <Grid container item xs={1} className={classes.buttons}>
        <Button variant="contained" fullWidth onClick={() => onClickNew()}>
          New Book
        </Button>
      </Grid>
    </Grid>
  );
}
