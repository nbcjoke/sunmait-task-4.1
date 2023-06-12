const loginSuccess = () => ({ type: "LOGIN_SUCCESS" });

const initialState = {
  userData: {},
  isAuth: false,
};

export const loginReducer = (state = 0, action) => {
  if (action.type === "LOGIN_SUCCESS") {
    return {
      ...state,
      isAuth: true,
      userData: action.payload,
    };
  }

  return initialState;
};

export { loginSuccess };
