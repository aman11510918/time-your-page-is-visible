import React, { useState, useEffect } from "react";

export function visibilityChange() {
  if (typeof document.hidden !== "undefined") {
    return "visibilitychange";
  } else if (typeof document.mshidden !== "undefined") {
    return "msvisibilitychange";
  } else if (typeof document.webkitHidden !== "undefine") {
    return "webkitvisibilitychange";
  }
}

export function hidden() {
  if (typeof document.hidden !== "undefined") {
    return "hidden";
  } else if (typeof document.mshidden !== "undefined") {
    return "msHidden";
  } else if (typeof document.webkitHidden !== "undefine") {
    return "webkitHidden";
  }
}

export function handleVisibilityChange() {
  return !document[hidden];
}

export function PageVisibility() {
  const [visible, setVisible] = useState(handleVisibilityChange());

  const onVisibilityChange = () => {
    setVisible(handleVisibilityChange());
  };

  useEffect(() => {
    const isVisible = visibilityChange();

    document.addEventListener(isVisible, onVisibilityChange, false);

    return () => {
      document.removeEventListener(isVisible, onVisibilityChange);
    };
  });

  return visible;
}
