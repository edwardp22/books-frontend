import { ActionTypes } from "../actionTypes";
import { toast } from "react-toastify";

export const booksGet = () => async (dispatch) => {
  dispatch(booksLoading());

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/books`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      var error = new Error(
        "Error " + response.status + ": " + response.statusText
      );
      throw error;
    }

    const records = await response.json();

    dispatch(booksAdd(records));
  } catch (error) {
    toast.error(error.message);
    dispatch(booksFailed(error.message));
  }
};

export const booksPost = (book) => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/books`, {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      var error = new Error(
        "Error " + response.status + ": " + response.statusText
      );
      throw error;
    }

    const records = await response.json();

    dispatch(booksAdd(records));
  } catch (error) {
    console.log("Post books", error.message);
    toast.error(error.message);
  }
};

export const booksPut = (id, book) => async (dispatch) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/books/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(book),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      var error = new Error(
        "Error " + response.status + ": " + response.statusText
      );
      throw error;
    }

    const records = await response.json();

    dispatch(booksAdd(records));
  } catch (error) {
    console.log("Put books", error.message);
    toast.error(error.message);
  }
};

export const booksDelete = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/books/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      var error = new Error(
        "Error " + response.status + ": " + response.statusText
      );
      throw error;
    }

    const records = await response.json();

    dispatch(booksAdd(records));
  } catch (error) {
    console.log("Delete books", error.message);
    toast.error(error.message);
  }
};

const booksLoading = () => ({
  type: ActionTypes.BOOKS_LOADING,
});

const booksFailed = (err) => ({
  type: ActionTypes.BOOKS_FAILED,
  payload: err,
});

const booksAdd = (payload) => ({
  type: ActionTypes.BOOKS_ADD,
  payload: payload,
});
