import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  isAdmin: false,
  statusPayment: "pending",
  token: "",
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    LOGIN_SUCCESS: (state, action) => {
      return {
        ...state,
        token: action.payload.token,
        user: action.payload,
      };
    },
    LOGOUT: (state) => {
      console.log(current(state));
    },
    SUCCESS_PAYMENT: (state, action) => {
      console.log(current(state));
    },
  },
});

export const { LOGIN_SUCCESS, LOGOUT, SUCCESS_PAYMENT } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
