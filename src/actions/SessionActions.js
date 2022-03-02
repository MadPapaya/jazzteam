import { checkCredentials } from "../helpers/session";

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export function logIn(params, cb) {
  return (dispatch) => {
    if (checkCredentials(params)) {
      sessionStorage.setItem("username", params.username);
      sessionStorage.setItem("isAuth", true);
      dispatch({
        type: LOG_IN,
        payload: {
          name: params.username,
        },
      });
      cb();
    } else {
      dispatch({
        type: LOG_IN_FAILURE,
        payload: {
          errorMsg: "Имя пользователя или пароль введены не верно",
        },
        error: true,
      });
    }
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}
