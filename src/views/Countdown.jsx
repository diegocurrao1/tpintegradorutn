import * as React from "react";

import Clock from "../components/Clock";

export default function Countdown() {
  const [isRunning, setIsRunning] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  const timeTick = () => {
    setTime((time) => time - 1);
  };

  React.useEffect(() => {
    let intervalID;

    const intValue = parseInt(value, 10);

    if (isRunning && intValue !== 0) {
      if (time === 0) setTime(intValue * 100);
      intervalID = setInterval(timeTick, 10);
    }

    return () => clearInterval(intervalID);
  }, [isRunning]);

  React.useEffect(() => {
    if (time <= 0) {
      resetState();
    }
  }, [time]);

  const toggleState = () => {
    setIsRunning(!isRunning);
  };

  const resetState = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <>
      <section className="content">
        <h1>Cuenta regresiva</h1>
        <Clock time={time} />
        <div>
          <button className="status-button" onClick={toggleState}>
            {isRunning ? "Pause" : "Start"}
          </button>
          <button className="status-button" onClick={resetState}>
            Reset
          </button>
          <input
            ref={inputRef}
            placeholder="0"
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
        </div>
      </section>
    </>
  );
}
