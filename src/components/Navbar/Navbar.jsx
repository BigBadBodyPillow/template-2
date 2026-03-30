import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="bg-zinc-800 h-10.5 mt-5  flex gap-5 items-center justify-between px-6 text-white fixed w-(--maxWidth) z-10">
        <div className="logo font-bold ">
          <a href="#">Logo</a>
        </div>
        <div className="links flex-1 flex justify-start gap-2 ">
          <a href="#" className="hover:underline">
            1
          </a>
          <a href="#" className="hover:underline">
            22
          </a>
          <a href="#" className="hover:underline">
            333
          </a>
          <a href="#" className="hover:underline">
            4444
          </a>
        </div>

        <div className="search">search</div>
      </nav>
    </>
  );
}
