import { api_path } from "./api_path";
import { renderKeyboard } from "./renderKeyboard";

export const createKeebs = async (data) => {
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
