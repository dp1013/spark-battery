const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HOME_UPDATE":
    case "ABOUT_UPDATE":
      const { name, image } = action.payload;
      return {
        ...state,
        name,
        image,
      };

    case "GET_SERVICES":
      return {
        ...state,
        services: action.payload,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loginError: null,
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loginError: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loginError: null,
      };

    default:
      return state;
  }
};

export default reducer;
