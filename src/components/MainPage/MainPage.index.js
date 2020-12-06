import React from "react";
import { PageVisibility } from "../PageVisibility/PageVisibility.index";
import { CurrentTime, TotalTime } from "../Timer/Timer.index";

function MainPage() {
  const isVisible = PageVisibility();
  const currentTimeIs = CurrentTime(isVisible);
  const totalTimeIs = TotalTime(isVisible);
  return (
    <React.Fragment>
      <div className="timer">
        <h3>You are seeing this page from last {currentTimeIs} seconds</h3>
        <h3>although</h3>
        <h3>you had already seen this page for {totalTimeIs} seconds.</h3>
      </div>
      <button className="button">Click Me</button>
    </React.Fragment>
  );
}

export default MainPage;
