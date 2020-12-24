import { ACTIONS } from "../../actionConstants";

const INITIAL_STATE = {
  isLoading: false,
  user: {
    name: "",
    email: "",
    imageProfile: "",
    signedCourses: [],
  },
};

const userReducers = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case ACTIONS.GET_USER_DATA: {
      console.log("payload", payload);
      return {
        ...state,
        user: {
          name: payload.name,
          email: payload.email,
          imageProfile: payload.imageProfile,
          signedCourses: payload.signedCourses,
        },
      };
    }
    case ACTIONS.SET_LOADING_ON: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ACTIONS.SET_LOADING_OFF: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export { userReducers };