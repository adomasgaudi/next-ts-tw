import React, { FC, useState } from "react";
import { Link, Logo } from "./Header.styles";
import tw from "twin.macro";

type Props = {};

const Header: FC<Props> = () => {
  const handleLogin = () => {};
  const handleLogout = () => {};
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  return (
    <header className="w-full z-10 shadowHov-trello mb-20">
      <div tw="flex justify-between items-center p-3">
        <div tw="flex items-center gap-20">
          <Link href="/">
            <div tw="flex items-center">
              <Logo />
              {/* {screenWidth > 700 ? <div>LOGO</div> : null} */}
            </div>
          </Link>
          <Link href="/" cls="cap-thin hover:cap-thick">
            HOME
          </Link>
          <Link href="/blogs" cls="cap-thin hover:cap-thick">
            BLOGS
          </Link>
          <Link href="/test" cls="cap-thin hover:cap-thick">
            TEST
          </Link>
        </div>
        <button
          type="button"
          className="font-btn-1 btn-1 blue"
          onClick={handleLogout}
        >
          {loggedIn ? "Log Out" : "Log In"}
        </button>
      </div>
    </header>
  );
};

export default Header;
