export const LOADING_TOGGLER = "LOADING_TOGGLER";

export const loadingToggler = (value) => {
  return {
    type: LOADING_TOGGLER,
    value,
  };
};

