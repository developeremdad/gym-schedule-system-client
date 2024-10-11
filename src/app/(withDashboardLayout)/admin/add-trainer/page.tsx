"use client";
import MyForm from "@/components/Forms/MyForm";
import MyInput from "@/components/Forms/MyInput";
import { useAddNewTrainerMutation } from "@/redux/features/admin/admin.api";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const AddTrainer = () => {
  const { register, handleSubmit } = useForm();
  const [addNewTrainer, { data, error, isLoading }] =
    useAddNewTrainerMutation();

  if (data?.success) {
    toast.success(data?.message);
  }

  if (error) {
    toast.error("Something went wrong.");
  }

  const handleFormSubmit = async (values: FieldValues) => {
    console.log(values);
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">
          Create New Trainer
        </h1>
        <MyForm onSubmit={handleFormSubmit}>
          <MyInput
            name="fullName"
            placeholder="Enter full name"
            required
            label="Full Name"
          />
          <MyInput
            name="email"
            required
            placeholder="Enter email"
            label="Email"
          />
          <MyInput
            name="password"
            placeholder="Enter password"
            label="Password"
          />

          <button type="submit" className="btn btn-outline w-full mt-6">
            Add Trainer
          </button>
        </MyForm>
      </div>
    </div>
  );
};

export default AddTrainer;
