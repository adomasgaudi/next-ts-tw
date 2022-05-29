import React from "react";
import Head from "../app/infra/components/Head";
import Header from "../app/bones/layout/Header";
import Image from "next/image";
import { ContainX } from "../app/infra/components/Contain";
import Footer from "../app/bones/layout/Footer";
import cube from "../static/img/random3.webp";
import { Div50 } from "../app/infra/components/Fifty";

export default function Home() {
  return (
    <>
      <Head title="Overanalysed" />
      <Header />
      <ContainX.H800p3>
        <Div50.R>
          <div className="fadeInUp">
            <div className="hero">Overanalysed blogs about anything: Food</div>
            <p className="p_xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              repellat expedita rem voluptatibus culpa tempora? Quibusdam
              repellendus voluptates eveniet
            </p>
            <br />
          </div>
        </Div50.R>
        <Div50.L>
          <Image src={cube} alt="cube" />
        </Div50.L>
      </ContainX.H800p3>
      <Footer />
    </>
  );
}
