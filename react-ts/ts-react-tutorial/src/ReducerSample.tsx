import React from "react";
import { useSampleDispatch, useSampleState } from "./SampleContext";

function ReducerSample() {
  const state = useSampleState();
  const dispatch = useSampleDispatch();

  const setCount = () => dispatch({ type: "SET_COUNT", count: 5 });
  const setText = () => dispatch({ type: "SET_TEXT", text: "Bi !" });
  const setColor = () => dispatch({ type: "SET_COLOR", color: "orange" });
  const toggleGood = () => dispatch({ type: "TOGGLE_GOOD" });

  return (
    <div>
      <div>
        <p>
          <code>count : </code> {state.count}
        </p>
        <p>
          <code>text : </code> {state.text}
        </p>
        <p>
          <code>color : </code> {state.color}
        </p>
        <p>
          <code>toggle : </code> {state.isGood}
        </p>
      </div>
      <div>
        <button onClick={setCount}>SET COUNT</button>
        <button onClick={setText}>SET TEXT</button>
        <button onClick={setColor}>SET COLOR</button>
        <button onClick={toggleGood}>TOGGLE_GOOD</button>
      </div>
    </div>
  );
}

export default ReducerSample;
