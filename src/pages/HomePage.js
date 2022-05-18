import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, LOGIN_SUCCESS } from "../redux/userSlice";

export function HomePage() {
  const count = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(count);

  return (
    <div>
      <h1>Cek</h1>
      <button onClick={() => dispatch(LOGIN_SUCCESS())}>-</button>
    </div>
  );
}
