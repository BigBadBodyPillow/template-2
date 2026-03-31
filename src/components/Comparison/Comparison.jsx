import React from "react";

import GraphLight from "../../assets/graph_Light.svg?react";
import Graph from "../../assets/graph.svg?react";
export default function Comparison() {
  return (
    <>
      <section className="border-0 border-t border-(--border) flex items-center ">
        <div className="info px-10 max-w-125 text-left ">
          <h3 className="text-4xl mb-4 text-pretty text-(--text-h) ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <p>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            earum ea corporis nemo libero odit. */}
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
    </>
  );
}
