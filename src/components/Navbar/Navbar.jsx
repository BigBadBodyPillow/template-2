import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="bg-(--accent) h-20.5 mt-5 max-sm:mt-0 flex gap-5 items-center justify-between px-6 text-(--text-h) fixed w-full max-w-[calc(var(--maxWidth)-2px)] z-10 ">
        <div className="logo font-bold ">
          <a href="#" className="text-4xl uppercase">
            Logo
          </a>
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
