import { api_path } from "./api_path";
import { renderKeyboard } from "./renderKeyboard";

export const createKeebs = (data) => {
  if (data["name"] == "") {
    data["name"] = "Nameless_Keeb";
  }

  data["image"] = renderKeyboard(data.keyboard);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(`${api_path}/create`, options);
  window.location = "/";
};

export const UpdateKeebs = async (data, id) => {
  data["image"] = renderKeyboard(data.keyboard);
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  await fetch(`${api_path}/${id}`, options);
  window.location = "/all";
};

export const deleteKeebs = (id) => {
  const options = {
    method: "DELETE",
  };

  fetch(`${api_path}/${id}`, options);

  window.location = "/";
};
