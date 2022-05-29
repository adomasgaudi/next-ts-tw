import React, { FC } from "react";
import Image from "next/image";
import fire3 from "../../static/img/fire3.png";
import { Link } from "./Header.styles";
import tw from "twin.macro";

type Props = {};

const Header: FC<Props> = () => (
  <header tw="w-full shadow-md z-10">
    <div tw="flex justify-between items-center p-3">
      <div tw="flex items-center gap-20">
        <div tw="flex items-center">
          <div tw="w-12 h-12 relative">
            <Image src={fire3} alt="cube" tw="top-10 absolute" />
          </div>
          {/* {screenWidth > 700 ? <div>LOGO</div> : null} */}
        </div>
        <Link href="/" cls="nav-link">
          HOME
        </Link>
        <Link href="/blogs" cls="nav-link">
          BLOGS
        </Link>
        <Link href="/test" cls="nav-link">
          TEST
        </Link>
      </div>
      <div>Log In</div>
    </div>
  </header>
);

export default Header;
