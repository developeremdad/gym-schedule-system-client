import { getUserInfo } from "@/services/actions/auth.services";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const userInfo = getUserInfo();
  const router = useRouter();
  return (
    <div className="h-screen bg-gray-300 text-black border border-r-orange-500">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Dashboard</h2>
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
              <Link href="/dashboard/manage-trainers">
                <span className="block py-2.5 px-4">Manage Trainers</span>
              </Link>
            </li>
            <li className="hover:bg-orange-500">
              <Link href="/dashboard/manage-class-schedules">
                <span className="block py-2.5 px-4">
                  Manage Class Schedules
                </span>
              </Link>
            </li>
            <li className="hover:bg-orange-500">
              <Link href="/dashboard/add-class-schedule">
                <span className="block py-2.5 px-4">Add Class Schedule</span>
              </Link>
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
              <Link href="/dashboard/my-assigned-classes">
                <span className="block py-2.5 px-4">My Assigned Classes</span>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
