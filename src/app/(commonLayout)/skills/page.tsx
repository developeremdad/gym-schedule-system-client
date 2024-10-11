"use client";

import { useAddNewSkillMutation } from "@/redux/features/allApis/allApiManagement.api";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const Skills = () => {
  const { register, handleSubmit } = useForm();
  const [addNewSkill, { data, error, isLoading }] = useAddNewSkillMutation();

  if (data?.success) {
    toast.success(data?.message);
  }

  if (error) {
    toast.error("Something went wrong.");
  }

  const onSubmit = async (data: FieldValues) => {
    const date = new Date();
    data.date = date;
    addNewSkill(data);
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Skills Form</h1>
        <form
          className="p-4 space-y-4 max-w-lg mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            {/* <input
              type="text"
              className="input input-bordered"
              {...register("category", { required: true })}
            /> */}
            <select
              className="input input-bordered"
              {...register("category", { required: true })}
              id=""
            >
              <option value="frontend">Front-End</option>
              <option value="backend">Back-End</option>
              <option value="otherTools">Other Tools</option>
              <option value="comfortable">Comfortable</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Skill</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              {...register("skill", { required: true })}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Skills;
