export const ragister = async (values : ragisterPayload) => {
  try {
    const res = await api.post("user/register", values);
    return res;
  } catch (error) {
    console.error("ragister failed:", error);
    throw error;
  }
};

export const Login = async (values : loginPayload) => {
  try {
    const res = await api.post("user/logInMobile", values);
    // store.dispatch(LoginState(data.result));
    return res;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};