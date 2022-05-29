import React, { ReactNode } from "react";
import { base } from "../../utils/tools/baseHOC";

interface propT {
  children: ReactNode;
  classIn?: string;
  classOut?: string;
  pad?: string;
}
export const Contain = ({
  children,
  classIn,
  classOut,
  pad,
  ...props
}: any) => {
  return (
    <main {...props} className={`flex justify-center ${classOut ?? ""}`}>
      <div className="container xl:w-[1124px]">
        <div className={` ${pad ?? ""}`}>
          <div className={` ${classIn ?? ""}`}>{children}</div>
        </div>
      </div>
    </main>
  );
};

export const H800p3 = base(Contain, {
  classOut: "min-h-[800px]",
  pad: "px-2 md:px-[3%]",
  classIn: " flex justify-center items-center pb-20",
});

export const ContainX = {
  H800p3,
};
