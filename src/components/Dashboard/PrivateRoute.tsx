"use client";

import { getUserInfo } from "@/services/actions/auth.services";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CustomSpinner from "../shared/CustomSpinner";

const PrivateRoute = ({
  children,
  roles,
}: {
  children: React.ReactNode;
  roles: string[];
}) => {
  const user = getUserInfo();
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else if (roles && !roles.includes(user.role)) {
      router.push("/");
    }
  }, [user, roles, router]);

  if (!user || (roles && !roles.includes(user.role))) {
    return (
      <div>
        <CustomSpinner />
      </div>
    );
  }

  return <>{children}</>;
};

export default PrivateRoute;
