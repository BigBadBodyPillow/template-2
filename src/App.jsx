import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";

// components
import { RainbowLine } from "./components/RainbowLine/RainbowLine";
import Showcase from "./components/Showcase/Showcase";
import DemoImages from "./components/Carousel/Carousel";
// assets
import GraphLight from "./assets/graph_Light.svg?react";
import Graph from "./assets/graph.svg?react";
import catJump from "./assets/1096117405106839572 (1).png";
import ManFixWebPage from "./assets/ManFixWebPage.svg?react";
import ManFixWebPageLight from "./assets/ManFixWebPageLight.svg?react";
import ManKeyHole from "./assets/ManKeyHole.svg?react";
import ManKeyHoleLight from "./assets/ManKeyHoleLight.svg?react";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <RainbowLine />

      {/* Navbar */}
      <section className="fixed w-full max-w-[calc(var(--maxWidth)-2px)] z-10">
        <div className="nav-blur w-full h-5 max-sm:h-0 backdrop-blur-md"></div>
        <nav className="bg-(--accent) h-20.5 flex gap-5 items-center justify-between px-6 text-(--text-h)   ">
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
      </section>

      <section id="spacer"></section>
      <div className="ticks"></div>
      {/* bg-taupe-600 */}

      {/* Hero  */}
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

      <Showcase />
      <div className="ticks"></div>

      {/* comparison */}
      <section className="border-0 border-t border-(--border) flex items-center ">
        <div className="info px-10 max-w-125 text-left ">
          <h3 className="text-4xl mb-4 text-pretty text-(--text-h) ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            cupiditate amet molestias, recusandae quisquam laborum molestiae
            blanditiis, minus, culpa fuga tempora dolores aliquam.
          </p>
        </div>
        <GraphLight
          className="dark:hidden block font-(family-name:--mono)"
          loading="lazy"
          alt="a graph showing fake data"
        />
        <Graph
          className="dark:block hidden font-(family-name:--mono)"
          loading="lazy"
          alt="a graph showing fake data"
        />
      </section>
      <div className="ticks"></div>
      <DemoImages />
      <div className="ticks"></div>

      <section className="border-0 border-t border-(--border) flex max-sm:flex-col">
        <div className="flex-1 px-10 py-5 flex flex-col  items-center">
          <ManFixWebPage
            className="dark:block hidden font-(family-name:--mono) max-h-50 max-w-50"
            loading="lazy"
            alt="a graph showing fake data"
          />
          <ManFixWebPageLight
            className="dark:hidden block font-(family-name:--mono) max-h-50 max-w-50"
            loading="lazy"
            alt="a graph showing fake data"
          />
          <h3 className="text-4xl mb-4 text-pretty text-(--text-h) text-left w-full">
            Lorem ipsum dolor sit.
          </h3>
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            corporis, porro distinctio quod cumque tempore labore necessitatibus
            quam consequuntur expedita quis et excepturi illum cum praesentium.
          </p>
        </div>
        <div className="flex-1 px-10 py-5 flex flex-col items-center">
          <ManKeyHole
            className=" dark:block hidden font-(family-name:--mono) max-h-50 max-w-50"
            loading="lazy"
            alt="a graph showing fake data"
          />
          <ManKeyHoleLight
            className="dark:hidden block font-(family-name:--mono) max-h-50 max-w-50"
            loading="lazy"
            alt="a graph showing fake data"
          />
          <h3 className="text-4xl mb-4 text-pretty text-(--text-h) text-left w-full">
            Lorem ipsum dolor sit.
          </h3>
          <p className="text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, ut
            vel! Saepe consequatur tenetur ipsa veniam quibusdam quaerat?
          </p>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>

      {/* <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter cursor-pointer"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section> */}
    </>
  );
}

export default App;
