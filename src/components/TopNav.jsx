import React from "react";
import { NavLink } from "react-router-dom"
import { useAppContext } from "../context/AppContext";

export const TopNav = () => {
  const { cartTotal, cartCount, clearCart } = useAppContext();
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1 justify-between">
        <NavLink to="/" className="btn btn-ghost normal-case px-0 md:px-1 text-sm md:text-2xl">
          LA MAGNIFICA LIBRERIA DE
          <span className="text-secondary-focus font-black ml-2">MACHI</span>
        </NavLink>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{cartCount}</span>
              </div>
            </label>
            <div
              tabIndex="0"
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{`${cartCount} Items`}</span>
                <span className="text-info">{`Subtotal: $ ${cartTotal}`}</span>
                <div className="card-actions">
                  <NavLink to="/buy" className="btn btn-primary btn-block">Ir al carrito</NavLink>
                  <button className="btn btn-warning btn-sm w-full" onclick={() => clearCart('vaciar')}>Vaciar carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
