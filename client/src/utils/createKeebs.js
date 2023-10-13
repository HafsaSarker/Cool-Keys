import { api_path } from "./api_path";
import axios from "axios";
import { renderKeyboard } from "./renderKeyboard";

export const createKeebs = async (data) => {
  data["name"] = "ex";
  data["image"] = renderKeyboard(data.keyboard);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const res = await fetch("http://localhost:3001/keyboards/create", options);
  console.log(res.json());
  //   //   window.location = "/";
};
