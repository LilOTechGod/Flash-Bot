import { createContext, useReducer, useEffect } from "react";

const initialState = {
  userId: null,
  token: null,
  exp: null,
  userEmail: null
};
// creates the context and sets it to authcontext
const AuthContext = createContext();

const getLocalData = () => {
  const storedToken = localStorage.getItem("token");
  const storedExp = localStorage.getItem("exp");
  const storedId = localStorage.getItem("userId");
  const storedEmail = localStorage.getItem("userEmail");

  let remainingTime = storedExp - new Date().getTime()
  if(remainingTime < 0) {
    localStorage.clear()
    return null
  }

  return {
    token: storedToken,
    exp: storedExp,
    userId: storedId,
    userEmail: storedEmail
  };
};

const AuthContextProvider = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        let { token, exp, userId, userEmail } = action.payload;
        localStorage.setItem("token", token);
        localStorage.setItem("exp", exp);
        localStorage.setItem("userId", userId);
        localStorage.setItem("userEmail", userEmail);
        return { ...state, token, exp, userId, userEmail };
      case "LOGOUT":
        localStorage.clear();
        return initialState;
      case "RETURNING_USER":
        let { token: t, userId: u, exp: e, userEmail: n } = action.payload;
        return { ...state, token: t, userId: +u, exp: +e, userEmail: n };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

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
