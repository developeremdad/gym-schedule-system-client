"use client";
import { useAddNewExperienceMutation } from "@/redux/features/allApis/allApiManagement.api";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const Experience = () => {
  const [skills, setSkills] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    organization: "",
    startDate: "",
    endDate: "",
    description: "",
    skills: "",
  });

  const [addNewExperience, { data, error }] = useAddNewExperienceMutation();

  if (data?.success) {
    toast.success(data?.message);
  }

  if (error) {
    toast.error("Something went wrong.");
  }

  const handleChange = (e: FieldValues) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSkillsChange = (e: FieldValues) => {
    const skillsArray = e.target.value
      .split(",")
      .map((skill: string) => skill.trim());
    setSkills(skillsArray);
  };

  const handleSubmit = (e: FieldValues) => {
    e.preventDefault();
    const date = new Date();
    const fullFormData = { ...formData, skills, date };
    addNewExperience(fullFormData);
    console.log("Form Data Submitted: ", fullFormData);
    // Handle form submission, e.g., send data to an API or update state
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Experience Form</h1>
      <form className="p-4 space-y-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            name="title"
            className="input input-bordered"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Organization</span>
          </label>
          <input
            type="text"
            name="organization"
            className="input input-bordered"
            value={formData.organization}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Start Date</span>
          </label>
          <input
            type="date"
            name="startDate"
            className="input input-bordered"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">End Date</span>
          </label>
          <input
            type="date"
            name="endDate"
            className="input input-bordered"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Skills</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            onChange={handleSkillsChange}
            placeholder="Comma-separated skills"
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Experience;
