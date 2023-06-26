import React, { useReducer } from "react";
import reducer, { initState } from './redux/reducer'
import { INCREASE, DECREASE } from "./redux/constant";


//1 Init state
// 2. Action
// 3. Reducer
// 4. dispatch
export default function Counter() {
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <h1>Redux</h1>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: INCREASE})}>Up</button>
      <button onClick={() => dispatch({ type: DECREASE})}>Down</button>
    </div>
  );
}
