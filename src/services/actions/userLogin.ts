import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import setAccessToken from "./setAccessToken";

export const userLogin = async (data: FieldValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    }
  );
  const userInfo = await res.json();
  if (!userInfo?.success) {
    toast.error(userInfo?.message);
  }

  if (userInfo.data.token) {
    setAccessToken(userInfo.data.token, "/");
  }

  return userInfo;
};
