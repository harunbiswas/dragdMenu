import { useEffect, useState } from "react";
import { BiConfused } from "react-icons/bi";
import { TbGridDots } from "react-icons/tb";

export default function () {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "text-1",
      icon: <BiConfused />,
    },
    {
      id: 2,
      text: "text-2",
      icon: <BiConfused />,
    },
    {
      id: 3,
      text: "text-3",
      icon: <BiConfused />,
    },
    {
      id: 4,
      text: "text-4",
      icon: <BiConfused />,
    },
    {
      icon: <TbGridDots />,
    },
  ]);
  const [outerItems, setOuterItems] = useState([
    {
      id: 1,
      text: "outer",
    },
    {
      id: 1,
      text: "outer",
    },
    {
      id: 1,
      text: "outer",
    },

    {
      id: 2,
      text: "outer",
    },
    {
      id: 2,
      text: "outer",
    },
    {
      id: 2,
      text: "outer",
    },
    {
      id: 2,
      text: "outer",
    },
    {
      id: 2,
      text: "outer",
    },
    {
      id: 3,
      text: "outer",
    },
    {
      id: 3,
      text: "outer",
    },
    {
      id: 3,
      text: "outer",
    },
    {
      id: 3,
      text: "outer",
    },
  ]);

  const [showNum, setShowNum] = useState(null);
  const showHandler = (e) => {
    if (showNum === e) {
      setShowNum(null);
    } else {
      setShowNum(e);
    }
  };

  useEffect(() => {
    // outer menu
    const oItems = document.querySelectorAll(".dragd-menu-outer");
    for (let i = 0; i < oItems.length; i++) {
      oItems[i].style.transform = `rotate(${
        i * 40 + 132
      }deg) translate(50%, 50%)`;
    }

    // main menu
    const cItems = document.querySelectorAll(".dragd-menu-item");
    for (let i = 0; i < cItems.length; i++) {
      cItems[i].style.transform = `rotate(${
        i * (360 / cItems.length) + 115
      }deg) translate(50%, 50%)`;
    }
  });

  return (
    <ul className="dragd-menu">
      {items &&
        items.map((item, i) => (
          <li key={i} className="dragd-menu-item">
            <a
              onClick={(e) => showHandler(item.id)}
              className={`dragd-menu-link ${(!item.text && "picker") || ""}`}
            >
              <span>{item.icon && item.icon}</span>
              <span>{item.text && item.text}</span>
            </a>
          </li>
        ))}

      {outerItems &&
        outerItems.map(
          (item, i) =>
            item.id === showNum && (
              <li
                key={i}
                className={`dragd-menu-outer ${
                  (item.id === showNum && "show") || ""
                }`}
              >
                <a
                  href="/"
                  className={`dragd-menu-link ${
                    (!item.text && "picker") || ""
                  }`}
                >
                  <span>{item.text && item.text}</span>
                </a>
              </li>
            )
        )}
      <div className="dragd-menu-inner">
        <span>
          {" "}
          <BiConfused />
        </span>
        <span> Text </span>
      </div>
    </ul>
  );
}
