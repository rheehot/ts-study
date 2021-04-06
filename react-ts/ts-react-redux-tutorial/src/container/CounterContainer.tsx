import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase, increase_by } from "../modules/counter";
import { RootState } from "../modules/index";

function CounterContainer() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncrease_by = (diff: number) => {
    dispatch(increase_by(diff));
  };

  return (
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncrease_by={onIncrease_by}
    />
  );
}

export default CounterContainer;
