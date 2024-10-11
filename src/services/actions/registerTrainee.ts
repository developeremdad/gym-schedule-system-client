"use server";

export const registerTrainee = async (formData: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/trainees/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      cache: "no-store",
    }
  );

  const traineeInfo = await res.json();
  return traineeInfo;
};
