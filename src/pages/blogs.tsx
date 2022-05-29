import React from "react";
import Head from "../app/infra/components/Head";
import styled, { css } from "styled-components";
import tw, { theme } from "twin.macro";
import Header from "../app/bones/layout/Header";

export default function Home() {
  return (
    <div className="">
      <Head title="Analysis Paralysis" />
      <Header />
      <main>blogs</main>
    </div>
  );
}
