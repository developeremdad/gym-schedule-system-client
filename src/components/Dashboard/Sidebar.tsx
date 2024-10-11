import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { getUserInfo } from "@/services/actions/auth.services";
import { logoutUser } from "@/services/actions/logoutUser";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const userInfo = getUserInfo();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    logoutUser(router);
    dispatch(logout());
  };
  return (
    <div className="h-screen bg-gray-300 text-black border border-r-orange-500">
      <div className="p-4">
        <h2 className="text-xl font-bold capitalize">
          {userInfo?.role} <br /> Dashboard
        </h2>
      </div>
      <nav className="mt-5">
        {userInfo.role === "admin" && (
          <ul>
            <li className="hover:bg-orange-500">
              <Link href="/ ">
                <span className="block py-2.5 px-4">Home</span>
              </Link>
            </li>
            <li className="hover:bg-orange-500 active:bg-orange-500">
              <Link href="/admin/manage-trainers">
                <span className="block py-2.5 px-4">Manage Trainers</span>
              </Link>
            </li>
            <li className="hover:bg-orange-500">
              <Link href="/admin/manage-class-schedules">
                <span className="block py-2.5 px-4">
                  Manage Class Schedules
                </span>
              </Link>
            </li>
            <li className="hover:bg-orange-500">
              <Link href="/admin/add-class-schedule">
                <span className="block py-2.5 px-4">Add Class Schedule</span>
              </Link>
            </li>
            <li className="hover:bg-orange-500 active:bg-orange-500">
              <button onClick={handleLogOut}>
                <span className="block py-2.5 px-4 font-bold">Logout</span>
              </button>
            </li>
          </ul>
        )}
        {userInfo.role === "trainer" && (
          <ul>
            <li className="hover:bg-orange-500">
              <Link href="/ ">
                <span className="block py-2.5 px-4">Home</span>
              </Link>
            </li>
            <li className="hover:bg-orange-500 active:bg-orange-500">
              <Link href="/trainer/my-assigned-classes">
                <span className="block py-2.5 px-4">My Assigned Classes</span>
              </Link>
            </li>
            <li className="hover:bg-orange-500 active:bg-orange-500">
              <button onClick={handleLogOut}>
                <span className="block py-2.5 px-4 font-bold">Logout</span>
              </button>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
