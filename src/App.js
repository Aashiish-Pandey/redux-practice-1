import React from "react";
import "./style.css";
import {useSelector} from 'react-redux'

export default function App() {

  const counter = useSelector(state=> state.counter)
  const isLogged = useSelector(state=>state.isLogged)
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <div>isLooged: {isLogged}</div>
    </div>
  );
}
