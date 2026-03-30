import React from "react";

import catJump from "../../assets/1096117405106839572 (1).png";
export default function Hero() {
  return (
    <>
      <section className="hero border-0 border-t border-(--border) flex justify-between py-5 px-10 max-sm:px-5 max-xs:px-2 relative overflow-x-clip">
        <div className="info w-125 text-left">
          <h1 className="text-6xl my-8">Lorem, ipsum dolor.</h1>
          <h2 className="text-2xl text-pretty">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            laboriosam perferendis, asperiores beatae a praesentium iure labore
            facilis!
          </h2>
          <div className="button-group grid grid-cols-2 grid-rows-2 max-xxs:grid-cols-1 max-xxs:grid-rows-3  w-fit gap-2 my-15">
            <a className="bg-(--button-bg) text-(--bg) hover:bg-(--button-bg-hover) active:bg-(--button-bg-active) font-(family-name:--mono) font-semibold h-10 w-35  max-xxs:w-full flex items-center justify-center text-2xl cursor-pointer">
              Lorem
            </a>
            <a className="bg-transparent text-(--accent) hover:bg-(--accent-bg) active:bg-(--accent-border) border border-(--accent)  font-(family-name:--mono) font-semibold h-10 flex items-center justify-center text-2xl cursor-pointer">
              Ipsum
            </a>
            <span className="col-span-2 max-xxs:col-span-1 text-center">
              Lorem ipsum dolor sit.
            </span>
          </div>
        </div>
        <img
          src={catJump}
          className="object-contain w-200 max-lg:w-175 max-md:w-150  max-sm:hidden h-auto select-none absolute  translate-x-[70%] translate-y-[-6%] z-[-1]"
          draggable={false}
        ></img>
      </section>
    </>
  );
}
