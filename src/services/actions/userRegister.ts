"use server";

import { FieldValues } from "react-hook-form";

export const registerUser = async (formData: FieldValues) => {
  console.log(formData);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      cache: "no-store",
    }
  );

  const user = await res.json();
  return user;
};
