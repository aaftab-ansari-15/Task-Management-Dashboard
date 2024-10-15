import React, {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import CountUp from "react-countup";
const Counter = forwardRef(({ startingTime }, ref) => {
  const [count, setCount] = useState(startingTime);

  useImperativeHandle(ref, () => ({
    getCount: () => count,
  }));

  useEffect(() => {
    setCount(startingTime);
  }, [startingTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <CountUp start={count} end={count} duration={1} />
    </div>
  );
});

export default Counter;
