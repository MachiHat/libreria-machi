import React from "react";

export const TopNav = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <button className="btn btn-ghost normal-case text-xl">
          LA IMPRESIONANTE LIBRERIA DE{" "}
          <span className="text-secondary text-xxl">MACHI</span>
        </button>
      </div>
      <ul className="menu menu-horizontal p-0">
        <li>
          <button>Item 1</button>
        </li>
        <li tabindex="0">
          <button>
            Parent
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </button>
          <ul className="p-2 bg-primary">
            <li>
              <button>Submenu 1</button>
            </li>
            <li>
              <button>Submenu 2</button>
            </li>
          </ul>
        </li>
        <li>
          <button>Item 3</button>
        </li>
      </ul>
    </div>
  );
};
