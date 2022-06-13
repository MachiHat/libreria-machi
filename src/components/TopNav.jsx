import React from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { BsBookmark, BsCart } from "react-icons/bs";

export const TopNav = () => {
  const { cartTotal, cartCount, clearCart } = useAppContext();
  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1 justify-between">
        <NavLink
          to="/"
          className="btn btn-ghost normal-case px-0 md:px-1 text-sm md:text-2xl"
        >
          LIBRERIA
          <span className="text-secondary-focus font-black ml-2">MACHI</span>
        </NavLink>
        <div className="flex justify-center">
          <NavLink className="btn btn-ghost md:text-lg" to="/lib">
            <BsBookmark />
          </NavLink>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
              <div className="indicator text-lg">
                <BsCart/>
                <span className="badge badge-sm indicator-item">
                  {cartCount}
                </span>
              </div>
            </label>
            <div
              tabIndex="0"
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{`${cartCount} Items`}</span>
                <span className="text-info">{`Subtotal: $ ${cartTotal.toFixed(2)}`}</span>
                <div className="card-actions">
                  <NavLink to="/buy" className="btn btn-primary btn-block">
                    Ir al carrito
                  </NavLink>
                  <button
                    className="btn btn-warning btn-sm w-full"
                    onClick={() => clearCart("vaciar")}
                  >
                    Vaciar carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
