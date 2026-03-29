import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="bg-red-300 h-10.5 mt-5 rounded-full flex gap-5 items-center justify-between text-black px-6">
        <div className="logo font-bold ">Logo</div>
        <nav className="flex-1 flex justify-start gap-2">
          <a href="#">1</a>
          <a href="#">22</a>
          <a href="#">333</a>
          <a href="#">4444</a>
        </nav>

        <div className="search">search</div>
      </div>
    </>
  );
}
