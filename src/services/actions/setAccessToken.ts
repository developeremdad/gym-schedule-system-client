"use server";

import { cookies } from "next/headers";

import { redirect } from "next/navigation";

const setAccessToken = (token: string, redirectPath?: string) => {
  cookies().set("token", token);
  if (redirect) {
    redirect(redirectPath || "/");
  }
};

export default setAccessToken;
