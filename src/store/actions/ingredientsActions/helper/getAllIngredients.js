import { API } from "../../../../backend";

export const getAllIngredients = () => {
  return fetch(`${API}/ingredientsInfo.json`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return error;
    });
};
