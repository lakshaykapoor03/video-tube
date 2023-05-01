import React from "react";
import { useSelector } from "react-redux";

const Menu = () => {
  const isMenuOpen = useSelector((store) => store.menu.isMenuOpen);

  return (
    <>
      {!isMenuOpen ? null : (
        <div className="w-52 h-[100vh] p-2 shadow-lg">
          <li>HOME</li>
          <li>Watch</li>
          <li>Subscriptions</li>
          <li>History</li>
          <li>Watch Later</li>
        </div>
      )}
    </>
  );
};

export default Menu;
