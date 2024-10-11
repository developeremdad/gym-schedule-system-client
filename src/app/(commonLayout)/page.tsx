"use client";
import dynamic from "next/dynamic";

const TextEditor = dynamic(() => import("@/components/Forms/TextEditor"), {
  ssr: false,
});

// import TextEditor from "@/components/Forms/TextEditor";
import { useAddNewBlogMutation } from "@/redux/features/allApis/allApiManagement.api";
import { useState } from "react";
import { toast } from "sonner";

const Blogs = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const date = new Date();

  const [addNewBlog, { data, error }] = useAddNewBlogMutation();
  console.log(data);

  if (data?.success) {
    toast.success(data?.message);
  }

  if (error) {
    toast.error("Something went wrong.");
  }

  const submitBLog = async () => {
    console.log({ title, content, date });
    addNewBlog({ title, content, date });
  };
  return (
    <div className="w-full space-y-3">
      <div className="text-center mb-5">
        <h1 className="text-2xl font-bold">Add New Blog</h1>
      </div>
      <>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Title"
          className="input input-bordered w-full"
        />
        <TextEditor defaultValue={content} onChange={setContent} />
        <button onClick={submitBLog} className="w-full btn btn-outline">
          Publish
        </button>
      </>
    </div>
  );
};

export default Blogs;
