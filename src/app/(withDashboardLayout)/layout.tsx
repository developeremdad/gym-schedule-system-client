"use client";
import PrivateRoute from "@/components/Dashboard/PrivateRoute";
import Sidebar from "@/components/Dashboard/Sidebar";
import CustomSpinner from "@/components/shared/CustomSpinner";
import { isLoggedIn } from "@/services/actions/auth.services";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const WithDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  console.log(isLoggedIn());

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <CustomSpinner />;
  }

  return (
    <div>
      <PrivateRoute roles={["trainer", "admin", "trainee"]}>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-grow bg-gray-100 p-5">{children}</div>
        </div>
      </PrivateRoute>
    </div>
  );
};

export default WithDashboardLayout;
