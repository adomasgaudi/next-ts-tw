import React from "react";
import Head from "../app/components/Head";
import styled, { css } from "styled-components";
import tw, { theme } from "twin.macro";

const PP = ({ children }) => (
  <p css={css({ color: theme`colors.purple.500` })}>{children}</p>
);

const Text = styled.h1`
  color: yellowgreen;
`;
const PropsStyle = styled.input<any>(({ hasBorder }) => [
  `color: black;`,
  hasBorder && tw`border-purple-500`,
]);

const Text2 = styled.h1`
  color: ${({ theme }) => theme.textCol};
`;
const Tailwind = styled.h1`
  ${tw`text-gray-400`}
`;
const TW = tw.h1`
  text-2xl text-yellow-700
`;
// const CSS = css`
//   color: red;
// `;

export default function Home() {
  return (
    <div className="">
      <Head title="Analysis Paralysis" />
      <main>
        <h1>none</h1>
        <p className="red">pure css</p>
        <p className="text-blue-300">tailwind</p>
        <p tw="text-purple-800">twin</p>
        <Text>styled</Text>
        <Text2>styled theme text 2</Text2>
        <Tailwind>styled + tw</Tailwind>
        <TW>styled with TW</TW>
        <PP>jojo pp</PP>
        {/* <StyledArray>styled array</StyledArray> */}
        <div
          css={`
            color: ${({ theme }) => theme.textCol};
          `}
        >
          styled with css
        </div>
      </main>
    </div>
  );
}
