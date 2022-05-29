import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import fire3 from "../../../static/img/fire3.png";
// import styled, { css } from "styled-components";
import tw from "twin.macro";

export const Link = ({ children, href, cls }: any) => (
  <NextLink href={href}>
    <a className={cls}>{children}</a>
  </NextLink>
);

export const Logo = () => {
  return (
    <div tw="w-12 h-12 relative">
      <Image src={fire3} alt="cube" tw="bg-[#F4DBD7] rounded-lg p-3 absolute" />
    </div>
  );
};
