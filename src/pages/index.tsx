import React from "react";
import Head from "../app/infra/components/Head";
import Header from "../app/bones/layout/Header";
import { ContainX } from "../app/infra/components/Contain";
import Footer from "../app/bones/layout/Footer";

export default function Home() {
  return (
    <>
      <Head title="Overanalysed" />
      <Header />
      <ContainX.H800p3>
        <div className="fadeInUp">
          <div className="hero">
            red text Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Pariatur, fugiat.
          </div>
          <p className="blue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            repellat expedita rem voluptatibus culpa tempora? Quibusdam
            repellendus voluptates eveniet numquam vel exercitationem repellat
            dolorum quasi assumenda suscipit nobis sed labore nulla incidunt
            nihil corporis similique ipsam libero explicabo, sapiente
            perferendis? Vitae voluptas, sapiente minus ipsam esse
            exercitationem possimus pariatur ea voluptatum cumque qui quibusdam
            ducimus nisi ut voluptatibus veniam repudiandae sequi asperiores
            similique aspernatur animi, facilis odio. Provident facilis expedita
            consequatur voluptatem eum maxime. Et cupiditate odio facilis
            voluptas doloribus cum numquam odit eaque ut tenetur quisquam iure
            consequatur enim deserunt necessitatibus dolore, in modi natus. Illo
            eaque alias vero!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            repellat expedita rem voluptatibus culpa tempora? Quibusdam
            repellendus voluptates eveniet numquam vel exercitationem repellat
            dolorum quasi assumenda suscipit nobis sed labore nulla incidunt
            nihil corporis similique ipsam libero explicabo, sapiente
            perferendis? Vitae voluptas, sapiente minus ipsam esse
            exercitationem possimus pariatur ea voluptatum cumque qui quibusdam
            ducimus nisi ut voluptatibus veniam repudiandae sequi asperiores
            similique aspernatur animi, facilis odio. Provident facilis expedita
            consequatur voluptatem eum maxime. Et cupiditate odio facilis
            voluptas doloribus cum numquam odit eaque ut tenetur quisquam iure
            consequatur enim deserunt necessitatibus dolore, in modi natus. Illo
            eaque alias vero!
          </p>
        </div>
      </ContainX.H800p3>
      <Footer />
    </>
  );
}
