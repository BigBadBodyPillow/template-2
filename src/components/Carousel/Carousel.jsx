import React from "react";

// components
import EmblaCarousel from "./Embla/EmblaCarousel";

// css
// import "./DemoImages.css";

// images
import pexelsJessikaarraes12499064 from "../../assets/carousel/pexels-jessikaarraes-12499064.jpg";
import pexelsOlegGamulinskii75506028771043 from "../../assets/carousel/pexels-oleg-gamulinskii-755060-28771043.jpg";
import pexelsGiovanniCalia11409263791796 from "../../assets/carousel/pexels-giovanni-calia-1140926-3791796.jpg";
import pexelsVisualkamikaze10244894 from "../../assets/carousel/pexels-visualkamikaze-10244894.jpg";

const SLIDES = [
  <img src={pexelsJessikaarraes12499064} loading="lazy" />,
  <img src={pexelsOlegGamulinskii75506028771043} loading="lazy" />,
  <img src={pexelsGiovanniCalia11409263791796} loading="lazy" />,
  <img src={pexelsVisualkamikaze10244894} loading="lazy" />,
];

export default function Carousel() {
  return (
    <>
      <section className="border-0 border-t border-(--border)">
        <EmblaCarousel slides={SLIDES} />
      </section>
    </>
  );
}
