import React, { useEffect } from "react";

import { Button, Grid, Typography } from "@material-ui/core";

import { error3 } from "../../assets";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  useEffect(() => {
    console.log(error.message);
    //email support with error.message
  }, [error]);

  return (
    <Grid
      container
      style={{ height: "100vh" }}
      justifyContent="center"
      alignItems="center"
      direction="row-reverse"
    >
      <Grid item xs={12} sm={4}>
        <img src={error3} alt="error" />
      </Grid>

      <Grid item xs={12} sm={8}>
        <Grid container justifyContent="center" style={{ textAlign: "center" }}>
          <Grid item xs={12}>
            <Typography variant="h3" color="primary" gutterBottom>
              Ups, something went wrong.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h4" color="primary" gutterBottom>
              We have received the error and we are working on it.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Button
              style={{
                width: 250,
                backgroundColor: "red",
                color: "white",
                borderRadius: 20,
              }}
              variant="outlined"
              onClick={resetErrorBoundary}
            >
              <Typography variant="h6" color="inherit">
                Return to the app. 🔄
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
