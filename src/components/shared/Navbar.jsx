"use client";
import useUserInfo from "@/app/hooks/useUserInfo";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { logoutUser } from "@/services/actions/logoutUser";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const userInfo = useUserInfo();
  console.log(userInfo);

  const handleLogOut = () => {
    logoutUser(router);
    dispatch(logout());
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <Link href="/about">About</Link>
              <li>
                <a></a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Smart Gym</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {userInfo?.email ? (
            <Link
              href={`${
                userInfo?.role === "admin"
                  ? "/admin/manage-trainers"
                  : userInfo?.role === "trainer"
                  ? "/trainer/my-assign-classes"
                  : userInfo?.role === "trainee"
                  ? "/trainee/my-classes"
                  : "/"
              }`}
              className="btn"
            >
              Dashboard
            </Link>
          ) : (
            <Link href="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
