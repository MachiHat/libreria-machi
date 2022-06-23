import axios from "axios";
import { config } from "./index";

export const addBook = async (bookdata) => {
  try {
    const data = {
      tax_id: bookdata.id,
      first_name: bookdata.publisher,
      last_name: bookdata.publishedDate,
      email: bookdata.author,
      json_data: bookdata.thumbnail,
      name: bookdata.title,
      description: "Sin notas...",
    };
    const response = await axios({
      url: config.url,
      method: "POST",
      headers: config.headers,
      data: data,
    });
    if (response.status === 201) {
      console.log("funcion js", response);
      return response.data.data.id;
    }
  } catch (error) {
    console.log(error.response.headers);
    console.log(error.response.data);
    console.log(error.response.status);
  }
};

export const deleteBook = (libID) => {
  axios({
    url: config.url + libID,
    method: "DELETE",
    headers: config.headers,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.response.headers);
      console.log(error.response.data);
      console.log(error.response.status);
    });
};

export const editNote = (note, libID) => {
  axios({
    url: config.url + libID,
    method: "PATCH",
    headers: config.headers,
    data: { description: note },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.response.headers);
      console.log(error.response.data);
      console.log(error.response.status);
    });
};
