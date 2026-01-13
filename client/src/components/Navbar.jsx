import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <div className="w-full flex justify-between items-center h-10 bg-violet-300 p-6 ">
      <h1 className="text-3xl font-bold tracking-wide">GigFlow</h1>
      <div className="space-x-2">
        <Link
          to={"/"}
          className="border px-2 py-1 bg-black rounded-lg outline-none text-white font-semibold"
        >
          Dashboard
        </Link>
        <Link
          to={"/create"}
          className="border px-2 py-1 bg-black rounded-lg text-white font-semibold"
        >
          Create Gig
        </Link>
        <button
          className="border px-2 py-1 bg-black rounded-lg text-white font-semibold"
          onClick={logout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
