import React from "react";
import Head from "../app/components/Head";
import styled, { css } from "styled-components";
import tw, { theme } from "twin.macro";
import Header from "../app/layout/Header";

export default function Home() {
  return (
    <div className="">
      <Head title="Analysis Paralysis" />
      <Header />
      <main>blogs</main>
    </div>
  );
}
