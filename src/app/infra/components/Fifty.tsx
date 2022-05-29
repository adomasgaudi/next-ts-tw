import React, { ReactNode } from "react";
import { base } from "../../utils/tools/baseHOC";
import { Contain } from "./Contain";

const FiftyFiftyRight = ({ children, ...props }: any) => {
  return <div {...props}>{children}</div>;
};
const FiftyFiftyLeft = ({ children, ...props }: any) => {
  return <div {...props}> {children}</div>;
};

const R = base(FiftyFiftyRight, {
  className: "w-full md:w-[50%] ",
});
const L = base(FiftyFiftyLeft, {
  className: "w-full md:w-[50%] justify-center items-center",
});

const Rxl = base(FiftyFiftyRight, {
  className: "w-full xl:w-[50%] justify-center items-center",
});
const Lxl = base(FiftyFiftyLeft, {
  className: "w-full xl:w-[50%] justify-center items-center",
});

export const Div50 = {
  R,
  L,
  Rxl,
  Lxl,
};
