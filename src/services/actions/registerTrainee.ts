"use server";

export const registerTrainee = async (formData: FormData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/trainees/create`,
    {
      method: "POST",
      body: formData,
      cache: "no-store",
    }
  );

  const traineeInfo = await res.json();
  return traineeInfo;
};
