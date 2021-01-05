import { LOADING_TOGGLER } from "../../actions/commonActions/commonActions";

const initialState = {
  loading: false,
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_TOGGLER:
      return {
        ...state,
        loading: action.value,
      };

    default:
      return state;
  }
};

export default commonReducer;
