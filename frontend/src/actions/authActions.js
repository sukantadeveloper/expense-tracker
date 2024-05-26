import axios from "axios";
const baseurl = "http://localhost:3000/api/users";
export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseurl}/login`, { email, password });
    sessionStorage.setItem("token",res.data.token)
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", payload: error.response.data.message });
  }
};

export const register = (name,email, password) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseurl}/register`, {name, email, password });
    dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "REGISTER_ERROR", payload: error.response.data.message });
  }
};

export const updateUserBudget = (budget) => async (dispatch) => {
  try {
    const token = sessionStorage.getItem('token');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.put(`${baseurl}/budget`, { budget }, config);
    dispatch({ type: 'UPDATE_BUDGET_SUCCESS', payload: res.data.budget });
  } catch (error) {
    dispatch({ type: 'UPDATE_BUDGET_ERROR', payload: error.response.data.message });
  }
}