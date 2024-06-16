import React, { useState } from "react";
import "./Home.css";
import { NavLink, Outlet } from "react-router-dom";

function Home() {
  const [move, setMove] = useState([
    "current learning",
    "completed",
    "archived",
  ]);
  return (
    <div className="home grid grid-cols-3 gap-10 pb-4">
      <section className="courses col-span-2">
        <div className="top-section flex items-center ">
          <h2 className="mr-2"> My learning</h2>
          <div className="move flex items-center">
            {move.map((e) => (
              <NavLink
                to={e}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-primary mx-3 capitalize"
                    : "text-black mx-3 capitalize"
                }
              >
                {e}
              </NavLink>
            ))}
          </div>
        </div>
        <Outlet />
      </section>
      <section className="right-side"></section>
    </div>
  );
}

export default Home;
