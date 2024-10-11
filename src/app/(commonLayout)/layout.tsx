"use client";
import PrivateRoute from "@/components/Dashboard/PrivateRoute";
import CustomSpinner from "@/components/shared/CustomSpinner";
import Navbar from "@/components/shared/Navbar";
import { isLoggedIn } from "@/services/actions/auth.services";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

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
      <PrivateRoute roles={["admin"]}>
        <Navbar />
        <div className="flex min-h-screen">
          <div className="flex-grow bg-gray-100 p-6">{children}</div>
        </div>
      </PrivateRoute>
    </div>
  );
};

export default CommonLayout;
