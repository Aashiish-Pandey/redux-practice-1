import React from "react";
import "./style.css";
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './actions'

export default function App() {

  const counter = useSelector(state=> state.counter)
  const isLogged = useSelector(state=>state.isLogged)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick = {()=>dispatch(increment(10))}>+</button>
      <button onClick = {()=>dispatch(decrement(5))}>-</button>


      {isLogged ?<div> user is logeed in</div>:<div> please login first</div>}
    </div>
  );
}
