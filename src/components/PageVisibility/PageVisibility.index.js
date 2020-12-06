import { useState, useEffect } from "react";

export function visibilityChange() {
  if (typeof document.hidden !== "undefined") {
    // Opera 12.10 and Firefox 18 and later support
    return "visibilitychange";
  } else if (typeof document.msHidden !== "undefined") {
    return "msvisibilitychange";
  } else if (typeof document.webkitHidden !== "undefined") {
    return "webkitvisibilitychange";
  }
}

export function hidden() {
  if (typeof document.hidden !== "undefined") {
    return "hidden";
  } else if (typeof document.msHidden !== "undefined") {
    return "msHidden";
  } else if (typeof document.webkitHidden !== "undefined") {
    return "webkitHidden";
  }
}

export function handleVisibilityChange() {
  return !document[hidden()];
}

export function PageVisibility() {
  const [visible, setVisible] = useState(() => handleVisibilityChange());

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
