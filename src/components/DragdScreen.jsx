import { useEffect, useRef, useState } from "react";
import DragdMenu from "./DragdMenu";

export default function DragdScreen() {
  const screenRef = useRef();
  const dragRef = useRef();
  const [left, setLeft] = useState(50);
  const [top, setTop] = useState(50);

  useEffect(() => {
    const picker = document.querySelector(".picker");
    let mouseMove = false;

    picker &&
      picker.addEventListener("mousedown", () => {
        mouseMove = true;
      });
    picker &&
      screenRef.current.addEventListener("mouseup", () => {
        mouseMove = false;
      });

    screenRef &&
      screenRef.current.addEventListener("mousemove", (e) => {
        if (mouseMove) {
          const bash = 7.8;
          setLeft(
            (100 / screenRef.current.clientWidth) * e.clientX > bash &&
              (100 / screenRef.current.clientWidth) * e.clientX < 100 - bash &&
              (100 / screenRef.current.clientWidth) * e.clientX
          );
          setTop(
            (100 / screenRef.current.clientHeight) * e.clientY - 10 >
              7.5 + bash &&
              (100 / screenRef.current.clientHeight) * e.clientY - 10
          );
        }
      });
  }, []);
  // (100 / screenRef.current.clientWidth) *
  return (
    <div ref={screenRef} className="dragd-screen">
      <div
        ref={dragRef}
        className="dragd"
        style={{ left: `${left}%`, top: `${top}%` }}
      >
        <DragdMenu />
      </div>
    </div>
  );
}
