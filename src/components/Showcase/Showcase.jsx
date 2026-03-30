import React from "react";
import Fire from "../../assets/fire.svg?react";
import Arrow from "../../assets/arrow-narrow-right-dashed.svg?react";

export default function Showcase() {
  return (
    <>
      <section className="relative overflow-x-clip ">
        {/* border-0 border-b border-(--border) */}
        {/* <div className="-z-1  h-60 w-full absolute -top-10 mask-linear-from-black blur-sm"></div> */}
        <h2 className="text-4xl mb-4">Lorem ipsum dolor sit</h2>
        <div className="cards grid  normal:grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 justify-between items-center gap-5">
          <a
            href="#"
            className="card min-h-40 bg-linear-to-r/oklch from-purple-500 to-pink-500 relative"
          >
            <div className="card-inner absolute inset-1 bg-(--bg) hover:bg-(--border) flex flex-col gap-3 items-center text-left px-10 py-5">
              <p className="w-full flex text-lg gap-2 bg-linear-to-r/oklch from-purple-500 to-pink-500 bg-clip-text text-transparent ">
                <Fire className="align-bottom fill-purple-500" />
                <span>Lorem, ipsum dolor.</span>
              </p>
              <p className="w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, iusto.
              </p>
            </div>
          </a>
          <a
            href="#"
            className="card min-h-40 bg-linear-to-r/oklch from-cyan-500 to-teal-500 relative"
          >
            <div className="card-inner absolute inset-1 bg-(--bg) hover:bg-(--border) flex flex-col gap-3 items-center text-left px-10 py-5">
              <p className="w-full flex text-lg gap-2 bg-linear-to-r/oklch from-cyan-500 to-teal-500 bg-clip-text text-transparent">
                <Fire className="align-bottom fill-cyan-500" />
                <span>Lorem, ipsum dolor.</span>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, iusto.
              </p>
            </div>
          </a>
          <a
            href="#"
            className="card min-h-40 bg-linear-to-r/oklch from-amber-300 to-indigo-700  relative"
          >
            <div className="card-inner absolute inset-1 bg-(--bg) hover:bg-(--border) flex flex-col gap-3 items-center text-left px-10 py-5">
              <p className="w-full flex text-lg gap-2 bg-linear-to-r/oklch from-amber-300 to-indigo-700 bg-clip-text text-transparent">
                <Fire className="align-bottom fill-amber-300" />
                <span>Lorem, ipsum dolor.</span>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, iusto.
              </p>
            </div>
          </a>
          <a
            href="#"
            className="card min-h-40 bg-linear-to-r/oklch from-rose-700 to-fuchsia-200 relative"
          >
            <div className="card-inner absolute inset-1 bg-(--bg) hover:bg-(--border) flex flex-col gap-3 items-center text-left px-10 py-5">
              <p className="w-full flex text-lg gap-2 bg-linear-to-r/oklch from-rose-700 to-fuchsia-200 bg-clip-text text-transparent">
                <Fire className="align-bottom fill-rose-700" />
                <span>Lorem, ipsum dolor.</span>
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, iusto.
              </p>
            </div>
          </a>
        </div>
        {/* <div className="links grid grid-cols-8 max-lg:grid-cols-6 justify-between  gap-2 my-5"> */}
        <div className="links flex flex-wrap justify-center md:justify-between gap-2 my-5 px-11 text-xl">
          <a
            href="#"
            className="text-(--accent) flex items-center justify-center gap-2"
          >
            Lorem
            <Arrow />
          </a>
          <a
            href="#"
            className="text-(--accent) flex items-center justify-center  gap-2"
          >
            ipsum
            <Arrow />
          </a>
          <a
            href="#"
            className="text-(--accent) flex items-center justify-center  gap-2"
          >
            dolor
            <Arrow />
          </a>
          <a
            href="#"
            className="text-(--accent) flex items-center justify-center  gap-2"
          >
            sit
            <Arrow />
          </a>
          <a
            href="#"
            className="text-(--accent) flex items-center justify-center  gap-2"
          >
            amet
            <Arrow />
          </a>
          <a
            href="#"
            className="text-(--accent) flex items-center justify-center  gap-2"
          >
            consectetur
            <Arrow />
          </a>
          <a
            href="#"
            className="text-(--accent) flex items-center justify-center  gap-2"
          >
            adipisicing
            <Arrow />
          </a>
          <a
            href="#"
            className="text-(--accent) flex items-center justify-center  gap-2"
          >
            elit
            <Arrow />
          </a>
        </div>
      </section>
    </>
  );
}
