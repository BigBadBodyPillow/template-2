import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./App.css";

// components
import { RainbowLine } from "./components/RainbowLine/RainbowLine";
import Showcase from "./components/Showcase/Showcase";
import Carousel from "./components/Carousel/Carousel";

// assets
//general
import GraphLight from "./assets/graph_Light.svg?react";
import Graph from "./assets/graph.svg?react";
import catJump from "./assets/1096117405106839572 (1).png";
import ManFixWebPage from "./assets/ManFixWebPage.svg?react";
import ManFixWebPageLight from "./assets/ManFixWebPageLight.svg?react";
import ManKeyHole from "./assets/ManKeyHole.svg?react";
import ManKeyHoleLight from "./assets/ManKeyHoleLight.svg?react";
import Arrow from "./assets/arrow-narrow-right-dashed.svg?react";

// parters
import Dotnet from "./assets/dotnet.svg?react";
import PolarsLogo from "./assets/polars-logo.svg?react";
import Steam from "./assets/steam.svg?react";
import SoundCloud from "./assets/SoundCloud_wordmark_light.svg?react";
import Uber from "./assets/Uber_light.svg?react";
import Voicemod from "./assets/Voicemod_light.svg?react";
import Ibm from "./assets/ibm.svg?react";

//socials
import Youtube from "./assets/youtube.svg?react";
import X from "./assets/X (formerly Twitter)_dark.svg?react";
import XLight from "./assets/X (formerly Twitter)_light.svg?react";
import GitHub from "./assets/GitHub_dark.svg?react";
import GitHubLight from "./assets/GitHub_light.svg?react";
import Linkedin from "./assets/linkedin.svg?react";

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
        <div className="info w-125 text-left max-sm:text-center max-sm:w-full max-sm:flex-col max-sm:flex max-sm:items-center">
          <h1 className="text-6xl my-8">Lorem, ipsum dolor</h1>
          <p className="text-2xl text-pretty">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            laboriosam perferendis, asperiores beatae a praesentium iure labore
            facilis!
          </p>
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
      <section className="border-0 border-t border-(--border) flex items-center max-md:py-5 max-md:flex-col">
        <div className="info px-10 max-w-125 text-left ">
          <h3 className="text-4xl mb-4 text-pretty text-(--text-h) ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            cupiditate amet molestias, recusandae quisquam laborum molestiae
            blanditiis, minus, culpa fuga tempora dolores aliquam.
          </p>
        </div>
        <GraphLight
          className="dark:hidden block font-(family-name:--mono) "
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

      {/* carousel */}
      <Carousel />

      <div className="ticks"></div>

      {/* other section that i dont know what to call */}
      <section className="border-0 border-t border-(--border) flex max-sm:flex-col py-10">
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
            Lorem ipsum dolor sit
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
            Lorem ipsum dolor sit
          </h3>
          <p className="text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, ut
            vel! Saepe consequatur tenetur ipsa veniam quibusdam quaerat?
          </p>
        </div>
      </section>

      <div className="ticks"></div>

      {/* new section */}
      <section className="border-0 border-t border-(--border) text-left py-20 bg-taupe-700  text-white flex flex-col gap-20 ">
        <div className="flex max-md:flex-col max-md:gap-5">
          <div className="flex-1 px-10">
            <h3 className="text-4xl mb-4 text-pretty w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, animi
            </h3>
          </div>
          <div className="flex-1 flex flex-col px-10">
            <p className="text-xl ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              repellat at saepe ipsum molestias tempora nisi, veritatis
              consequatur voluptates voluptate fuga?
            </p>
            <a
              href="#"
              className="bg-(--accent) text-black hover:bg-(--button-bg-hover) active:bg-(--button-bg-active) font-(family-name:--mono) font-semibold h-10 px-5 w-fit flex items-center justify-center text-2xl cursor-pointer mt-5"
            >
              Lorem, ipsum dolor
            </a>
          </div>
        </div>
        <div className="flex gap-5 px-10 max-md:flex-col max-md:gap-10 ">
          <div className="flex-1 flex flex-col justify-between ">
            <p className="text-2xl">Lorem</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              iure, quas delectus quo quam voluptatem nisi suscipit consequatur
              obcaecati molestiae. Assumenda quam animi dolorem eveniet natus
              iusto dolores repellat.
            </p>
            <a
              href="#"
              className="text-(--accent) flex items-center justify-start gap-2 mt-5 hover:underline group"
            >
              Lorem
              <Arrow className="group-hover:translate-x-1 transition duration-200" />
            </a>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <p className="text-2xl">Lorem</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vel
              iure nisi architecto amet ut. Iusto eius et saepe consequatur
              impedit assumenda vero! Ullam minima illum, dolorum numquam quo
              eos repudiandae. Mollitia illo dolorem iste, magni reprehenderit
              nobis.
            </p>
            <a
              href="#"
              className="text-(--accent) flex items-center justify-start gap-2 mt-5 hover:underline group"
            >
              Lorem
              <Arrow className="group-hover:translate-x-1 transition duration-200" />
            </a>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <p className="text-2xl">Lorem</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              similique, quisquam ea dolorum illum fugiat hic distinctio dolorem
              atque officiis odio iste, ut animi iure dicta quaerat!
            </p>
            <a
              href="#"
              className="text-(--accent) flex items-center justify-start gap-2 mt-5 hover:underline group"
            >
              Lorem
              <Arrow className="group-hover:translate-x-1 transition duration-200" />
            </a>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      {/* section2 */}
      <section className="border-0 border-t border-(--border) flex flex-col gap-5 py-10">
        <div className="py-5 px-10">
          <h3 className="text-4xl mb-4 text-pretty text-(--text-h) w-full">
            Lorem ipsum dolor sit
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, ut
            vel! Saepe consequatur tenetur ipsa veniam quibusdam quaerat?
          </p>
        </div>
        <div className="flex gap-5 px-10 max-md:flex-col max-md:gap-10 text-left pb-10">
          <div className="flex-1 flex flex-col justify-between ">
            <div>
              <p className="text-2xl">Lorem</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                iure, quas delectus quo quam voluptatem nisi suscipit
                consequatur obcaecati molestiae. Assumenda quam animi dolorem
                eveniet natus iusto dolores repellat.
              </p>
            </div>
            <a
              href="#"
              className="text-(--accent) flex items-center justify-start gap-2 mt-2 hover:underline group"
            >
              Lorem
              <Arrow className="group-hover:translate-x-1 transition duration-200" />
            </a>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p className="text-2xl">Lorem</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                vel iure nisi architecto amet ut. Iusto eius et saepe
                consequatur impedit assumenda vero! Ullam minima illum, dolorum
                numquam quo eos repudiandae. Mollitia illo dolorem iste, magni
                reprehenderit nobis.
              </p>
            </div>
            <a
              href="#"
              className="text-(--accent) flex items-center justify-start gap-2 mt-2 hover:underline group"
            >
              Lorem
              <Arrow className="group-hover:translate-x-1 transition duration-200" />
            </a>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p className="text-2xl">Lorem</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam similique, quisquam ea dolorum illum fugiat hic
                distinctio dolorem atque officiis odio iste, ut animi iure dicta
                quaerat!
              </p>
            </div>
            <a
              href="#"
              className="text-(--accent) flex items-center justify-start gap-2 mt-2 hover:underline group"
            >
              Lorem
              <Arrow className="group-hover:translate-x-1 transition duration-200" />
            </a>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p className="text-2xl">Lorem</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                laborum at quod laboriosam dolore minus facere consectetur
                quaerat iste assumenda similique adipisci ea libero nisi ipsum
                reprehenderit, doloribus, asperiores magnam?
              </p>
            </div>
            <a
              href="#"
              className="text-(--accent) flex items-center justify-start gap-2 mt-2 hover:underline group"
            >
              Lorem
              <Arrow className="group-hover:translate-x-1 transition duration-200" />
            </a>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      {/* new section 3 */}
      <section className="border-0 border-t border-(--border) text-left py-20 bg-taupe-700  text-white flex flex-col gap-20 ">
        <div className="flex max-md:flex-col max-md:gap-5">
          <div className="flex-1 px-10">
            <h3 className="text-4xl mb-4 text-pretty w-full">
              Lorem ipsum dolor{" "}
              <span className="bg-linear-to-r from-orange-500 to-pink-400  bg-clip-text text-transparent">
                sit amet consectetur{" "}
              </span>
              adipisicing elit
            </h3>
          </div>
          <div className="flex-1 flex flex-col px-10">
            <p className="text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam autem
              accusantium dolorem omnis impedit voluptatibus. Veniam, rem optio.
            </p>
            <a
              href="#"
              className="bg-(--accent) text-black hover:bg-(--button-bg-hover) active:bg-(--button-bg-active) font-(family-name:--mono) font-semibold h-10 px-5 w-fit flex items-center justify-center text-2xl cursor-pointer mt-5"
            >
              Lorem, ipsum
            </a>
          </div>
        </div>
        <div className="flex gap-5 px-10 text-center">
          <div className="flex-1 flex flex-col ">
            <p className="text-4xl font-bold bg-linear-to-r from-orange-500 to-pink-400  bg-clip-text text-transparent">
              Lorem
            </p>
            <p className="underline">Lorem, ipsum dolor</p>
          </div>
          <div className="flex-1 flex flex-col">
            <p className="text-4xl font-bold bg-linear-to-r from-orange-500 to-pink-400  bg-clip-text text-transparent">
              Lorem
            </p>
            <p className="underline">Lorem, ipsum dolor</p>
          </div>
          <div className="flex-1 flex flex-col">
            <p className="text-4xl font-bold bg-linear-to-r/oklch from-orange-500 to-pink-400 bg-clip-text text-transparent">
              Lorem
            </p>
            <p className="underline">Lorem, ipsum dolor</p>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      <section className="border-0 border-t border-(--border) flex max-md:flex-col text-left gap-5 px-10 py-10">
        <div className="flex-1 overflow-x-clip flex flex-col justify-center gap-2.5 relative">
          <div className="absolute left-0 w-25 h-full z-1 bg-linear-to-r dark:from-taupe-900 from-white to-transparent"></div>
          <div className="absolute right-0 w-25 h-full z-1 bg-linear-to-l dark:from-taupe-900 from-white to-transparenttaupe-900"></div>
          {/* row1 */}
          <div className="flex flex-nowrap mb-3 justify-between gap-5 -translate-x-22 ">
            <div className="basis-auto shrink-0 grow-0  bg-white p-5">
              <SoundCloud
                alt="soundcloud logo"
                className="max-w-full w-auto h-10"
              />
            </div>
            <div className="basis-auto shrink-0 grow-0   bg-white p-5">
              <Dotnet alt="dot net logo" className="max-w-full w-auto h-10" />
            </div>
            <div className="basis-auto shrink-0 grow-0  bg-white p-5">
              <PolarsLogo
                alt="PolarsLogo logo"
                className="max-w-full w-auto h-10"
              />
            </div>
            <div className="basis-auto shrink-0 grow-0  bg-white p-5">
              <Steam alt="Steam logo" className="max-w-full w-auto h-10 " />
            </div>
          </div>
          {/* row2 */}
          <div className="flex  flex-nowrap mb-3 justify-between gap-5 -translate-x-5">
            <div className="basis-auto shrink-0 grow-0  bg-white p-5">
              <Uber alt="Uber logo" className="max-w-full w-auto h-10" />
            </div>
            <div className="basis-auto shrink-0 grow-0   bg-white p-5">
              <Ibm alt="Ibm logo" className="max-w-full w-auto h-10" />
            </div>
            <div className="basis-auto shrink-0 grow-0  bg-white p-5">
              <Voicemod
                alt="Voicemod logo"
                className="max-w-full w-auto h-10"
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-4xl mb-4 text-pretty text-(--text-h) w-full">
            Lorem ipsum dolor sit
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            laborum blanditiis voluptas fugiat, culpa cum quas rerum beatae
            expedita exercitationem nemo esse reprehenderit. Blanditiis
            consequuntur iusto odit dolore vero ducimus quos repudiandae hic
            iure nemo corrupti perferendis quasi esse aut, perspiciatis porro ex
            voluptatum. Aperiam qui accusantium iusto!
          </p>
          <a
            href="#"
            className="text-(--accent) flex items-center justify-start gap-2 mt-2 hover:underline group"
          >
            Lorem, ipsum dolor
            <Arrow className="group-hover:translate-x-1 transition duration-200" />
          </a>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
      <div className="ticks"></div>

      <section className="border-0 border-t border-(--border) bg-(--accent) flex max-md:flex-col text-left gap-5 px-10 py-20 ">
        <h2 className="flex-1 text-5xl  text-(--text-h) flex items-center">
          Lorem ipsum dolor sit.
        </h2>
        <div className="flex flex-col flex-1 gap-5">
          <p className="text-xl text-(--text-h)">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <a className="bg-white text-(--accent) hover:bg-(--button-bg-hover) active:bg-(--button-bg-active) font-(family-name:--mono) font-semibold h-10 w-35  max-xxs:w-full flex items-center justify-center text-2xl cursor-pointer">
            Lorem
          </a>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="spacer" className="h-80!"></section>

      <footer className="flex flex-col gap-5 px-10 py-5 items-center">
        <div className="socials flex gap-5 items-center">
          <p className="flex justify-center font-bold text-2xl text-(--text-h)">
            Follow us
          </p>
          <a href="#" alt="X (Formery Twitter)">
            <XLight className="w-8 h-auto block dark:hidden " />
            <X className="w-8  h-auto hidden dark:block " />
          </a>
          <a href="#" alt="GitHub">
            <GitHubLight className="w-9 h-auto block dark:hidden" />
            <GitHub className="w-9  h-auto hidden dark:block " />
          </a>
          <a href="#" alt="Linkedin">
            <Linkedin className="w-8 h-auto" />
          </a>
          <a href="#" alt="Youtube">
            <Youtube className="w-10 h-auto" />
          </a>
        </div>
        <div className="flex w-full gap-5 justify-center flex-wrap">
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="hover:underline">
            Support
          </a>
          <a href="#" className="hover:underline">
            Privacy & Cookies
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Trademarks
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
