"use client";
import { useEffect } from "react";

import MyForm from "@/components/Forms/MyForm";
import MyInput from "@/components/Forms/MyInput";
import CustomSpinner from "@/components/shared/CustomSpinner";
import {
  useGetTrainerByIdQuery,
  useUpdateTrainerMutation,
} from "@/redux/features/admin/admin.api";
import { TError } from "@/types/global";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const UpdateTrainer = ({ params }: any) => {
  const {
    data: trainer,
    error,
    isFetching,
  } = useGetTrainerByIdQuery(params?.trainerId, { skip: !params?.trainerId });
  const [updateTrainer, { data: uData, error: uError }] =
    useUpdateTrainerMutation();

  if (uData) {
    toast.success(uData.message, {
      duration: 2000,
    });
  }

  if (uError) {
    toast.error((uError as TError)?.data?.message, {
      duration: 2000,
    });
  }

  useEffect(() => {
    if (error) {
      toast.error((error as any)?.data?.message);
    }
  }, [error]);

  const handleUpdateTrainer = async (data: FieldValues) => {
    try {
      const payload = {
        id: params?.trainerId,
        data: {
          fullName: data.fullName,
          email: data.email,
        },
      };

      await updateTrainer(payload).unwrap();
    } catch (error) {
      console.error("Error updating trainer: ", error);
    }
  };

  // if (isFetching) return <CustomSpinner />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Update Trainer</h1>

      {/* Update Trainer Form */}
      {!isFetching ? (
        <MyForm onSubmit={handleUpdateTrainer} defaultValues={trainer?.data}>
          <MyInput name="fullName" label="Full Name" type="text" required />
          <MyInput name="email" label="Email" type="email" required />
          <button type="submit" className="btn btn-outline w-full mt-6">
            Update Trainer
          </button>
        </MyForm>
      ) : (
        <CustomSpinner />
      )}
    </div>
  );
};

export default UpdateTrainer;
