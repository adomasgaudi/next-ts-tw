import React, { ReactNode } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { base } from "../../utils/tools/baseHOC";
import { Contain } from "./Contain";

const Card1up = ({ children, ...props }: any) => {
  return <div {...props}>{children}</div>;
};

const Land = base(Card1up, {
  className: "min-w-[300px] h-[300px] overflow-hidden flex flex-row",
});

const Port = styled.div`
  ${tw`w-full md:w-[50%] overflow-hidden  flex flex-row`}
`;

const LandImg = styled.img`
  ${tw`h-full w-40 object-cover`}
`;
const LandContent = styled.div`
  ${tw``}
`;

export const Card = {
  Land,
  Port,
  LandImg,
  LandContent,
};
