import * as React from "react";

import Clock from "../components/Clock";

export default function Timer() {
  const [isRunning, setIsRunning] = React.useState(false);
  const [time, setTime] = React.useState(0);

  const timeTick = () => {
    setTime((time) => time + 1);
  };

  React.useEffect(() => {
    let intervalID;
    if (isRunning) {
      intervalID = setInterval(timeTick, 10);
    }
    return () => clearInterval(intervalID);
  }, [isRunning]);

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
        <h1>Cronómetro</h1>
        <Clock time={time} />
        <div>
          <button className="status-button" onClick={toggleState}>
            {isRunning ? "Pause" : "Start"}
          </button>
          <button className="status-button" onClick={resetState}>
            Reset
          </button>
        </div>
      </section>
    </>
  );
}
