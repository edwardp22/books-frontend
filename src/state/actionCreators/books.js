import ActionTypes from "../actionTypes";
import { toast } from "react-toastify";

export const booksGet = () => (dispatch) => {
  dispatch(booksLoading());

  return fetch(`${process.env.REACT_APP_API_URL}/books`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((res) => res.json())
    .then((res) => dispatch(booksAdd(res.records)))
    .catch((error) => {
      toast.error(error.message);
      dispatch(booksFailed(error.message));
    });
};

export const booksPost = (book) => (dispatch) => {
  return fetch(`${process.env.REACT_APP_API_URL}/books`, {
    method: "POST",
    body: JSON.stringify(book),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(booksAdd(response)))
    .catch((error) => {
      console.log("Post books", error.message);
      toast.error(error.message);
    });
};

export const booksPut = (id, book) => (dispatch) => {
  return fetch(`${process.env.REACT_APP_API_URL}/books/${id}`, {
    method: "PUT",
    body: JSON.stringify(book),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(booksAdd(response)))
    .catch((error) => {
      console.log("Put books", error.message);
      toast.error(error.message);
    });
};

export const booksDelete = (id) => (dispatch) => {
  return fetch(`${process.env.REACT_APP_API_URL}/books/${id}`, {
    method: "DELETE",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(booksAdd(response)))
    .catch((error) => {
      console.log("Delete books", error.message);
      toast.error(error.message);
    });
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
