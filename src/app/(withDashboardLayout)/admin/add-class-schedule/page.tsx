"use client";
import MyForm from "@/components/Forms/MyForm";
import MyInput from "@/components/Forms/MyInput";
import { useAddNewClassScheduleMutation } from "@/redux/features/classSchedule/classSchedule.api";
import { TError } from "@/types/global";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const AddClassSchedule = () => {
  const [createSchedule, { data, error }] = useAddNewClassScheduleMutation();

  if (data?.success) {
    toast.success(data?.message);
  }

  if (error) {
    toast.error((error as TError)?.data?.message);
  }

  const handleAddSchedule = async (values: FieldValues) => {
    createSchedule(values);
  };

  const defaultValues = {
    scheduleData: "",
    startTime: "",
    endTime: "",
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Add New Schedule</h1>

        <MyForm onSubmit={handleAddSchedule} defaultValues={defaultValues}>
          <MyInput
            name="scheduleDate"
            label="Schedule Date"
            type="date"
            required
          />
          <MyInput name="startTime" label="Start Time" type="time" required />
          <MyInput name="endTime" label="End Time" type="time" required />
          <button type="submit" className="btn btn-outline mt-6 w-full">
            Add Schedule
          </button>
        </MyForm>
      </div>
    </div>
  );
};

export default AddClassSchedule;
