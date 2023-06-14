const loginSuccess = () => ({ type: "LOGIN_SUCCESS" });

const initialState = {
  userData: {},
  isAuth: false,
};

export const loginReducer = (state = initialState, action) => {
  if (action.type === "LOGIN_SUCCESS") {
    console.log(state, action);
    return {
      ...state,
      isAuth: true,
      userData: action.payload,
    };
  }

  return initialState;
};

export { loginSuccess };
