/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { JwtPayloadTypes, UserTypes } from "../../../services/data-types";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
  });
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JwtPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      user.avatar = `${IMG}/${user.avatar}`;
      setIsLogin(true);

      setUser(userFromPayload);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove("token");
    router.push("/");
    setIsLogin(false);
  };

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none" />
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={user.avatar}
              className="rounded-circle"
              width="40"
              height="40"
              alt=""
            />
          </a>

          <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
            <li><Link href="/member"><a className="dropdown-item text-lg color-palette-2">My Profile</a></Link></li>
            <li><Link href="#"><a className="dropdown-item text-lg color-palette-2">Wallet</a></Link></li>
            <li>
              <Link href="/member/edit-profile"><a className="dropdown-item text-lg color-palette-2">Account Settings</a></Link>
            </li>
            <li>
              <a
                className="dropdown-item text-lg color-palette-2 cursor"
                onClick={onLogout}
              >
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li className="nav-item my-auto" onClick={onLogout}>
      <Link href="/sign-in">
        <a
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          role="button"
        >
          SignIn
        </a>
      </Link>
    </li>

  );
}
