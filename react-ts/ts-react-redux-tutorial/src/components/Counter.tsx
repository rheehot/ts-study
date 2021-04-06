import React from "react";

type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncrease_by: (diff: number) => void;
};

export default function Counter({
  count,
  onIncrease,
  onDecrease,
  onIncrease_by,
}: CounterProps) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncrease_by(5)}>+5</button>
    </div>
  );
}
