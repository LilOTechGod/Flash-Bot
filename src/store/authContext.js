import { createContext, useReducer, useEffect } from "react";

const initialState = {
  userId: null,
  token: null,
  exp: null,
  user_email: null
};
// creates the context and sets it to auth context
// createContext allows us to share state up and down a component tree quite easy.
const AuthContext = createContext();

const getLocalData = () => {
  const storedToken = localStorage.getItem("token");
  const storedExp = localStorage.getItem("exp");
  const storedId = localStorage.getItem("userId");
  const storedEmail = localStorage.getItem("user_email");

  // whatever storedExp is minus the current UTC were calculating how much time do we have left until expires
  let remainingTime = storedExp - new Date().getTime()

  if(remainingTime < 0) {
    localStorage.clear()
    return null
  }

  return {
    token: storedToken,
    exp: storedExp,
    userId: storedId,
    user_email: storedEmail
  };
};

const AuthContextProvider = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        let { token, exp, userId, user_email } = action.payload;
        localStorage.setItem("token", token);
        localStorage.setItem("exp", exp);
        localStorage.setItem("userId", userId);
        localStorage.setItem("user_email", user_email);
        return { ...state, token, exp, userId, user_email };
      case "LOGOUT":
        localStorage.clear();
        return initialState;
      case "RETURNING_USER":
        let { token: t, userId: u, exp: e, user_email: n } = action.payload;
        return { ...state, token: t, userId: +u, exp: +e, user_email: n };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  // a fun that we call depending on the rendering of something
  useEffect(() => {
    let localData = getLocalData();
    if (localData) {
      dispatch({ type: "RETURNING_USER", payload: localData });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthContextProvider };
