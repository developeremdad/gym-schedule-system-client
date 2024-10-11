"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const TextEditor = dynamic(() => import("@/components/Forms/TextEditor"), {
  ssr: false,
});

interface FormData {
  title: string;
  description: string;
  technologies: string[];
  clientLive: string;
  serverLive: string;
  clientCode: string;
  serverCode: string;
}

const Projects = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingCover, setIsLoadingCover] = useState(false);
  const [content, setContent] = useState("");
  const [coverUrl, setCoverUrl] = useState(
    "https://res.cloudinary.com/dwijckjzi/image/upload/v1724258392/portfolio/el4dqaoqqa81yrhsjysg.png"
  );
  const [submitData, setSubmitData] = useState<FormData>({
    title: "",
    description: "",
    technologies: [],
    clientLive: "",
    serverLive: "",
    clientCode: "",
    serverCode: "",
  });

  const [newTechnology, setNewTechnology] = useState<string>("");
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const { register, handleSubmit } = useForm();

  const onSubmitCover = async (data: FieldValues) => {
    setIsLoadingCover(true);
    const formData = new FormData();
    formData.append("file", data.image[0]);
    formData.append(
      "upload_preset",
      `${process.env.NEXT_PUBLIC_UPLOAD_PRESET}`
    );

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();
    if (result) {
      setIsLoadingCover(false);
      setCoverUrl(result?.secure_url);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSubmitData({
      ...submitData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTechnologyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTechnology(e.target.value);
  };

  const addTechnology = () => {
    if (newTechnology.trim()) {
      setSubmitData({
        ...submitData,
        technologies: [...submitData.technologies, newTechnology.trim()],
      });
      setNewTechnology("");
    }
  };

  const removeTechnology = (tech: string) => {
    setSubmitData({
      ...submitData,
      technologies: submitData.technologies.filter((t) => t !== tech),
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImages((prevImages) => [...prevImages, ...files]);

    const newImagePreviews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newImagePreviews]);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("title", submitData.title);
    formData.append("description", content);
    formData.append("clientLive", submitData.clientLive);
    formData.append("serverLive", submitData.serverLive);
    formData.append("clientCode", submitData.clientCode);
    formData.append("serverCode", submitData.serverCode);

    formData.append("coverUrl", `${coverUrl}`);
    submitData.technologies.forEach((tech, index) => {
      formData.append(`technologies[${index}]`, tech);
    });
    images.forEach((image, index) => {
      formData.append("images", image);
    });

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/create-project`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          toast.success(data?.message);
          setIsLoading(false);
        } else {
          toast.error(data?.message);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        toast.error("Something went wrong.");
      });
  };

  /* 
  {
    "asset_id": "dcc7f5c8f8fddbd41a2bbf4cb275e741",
    "public_id": "portfolio/d0ylmugzhruqg2icqkfb",
    "version": 1721199024,
    "version_id": "80a160800ae0b1fc181b249df89696f7",
    "signature": "49b4c2e2569e62be95125e8e1f3b49788ebb0d49",
    "width": 2488,
    "height": 1472,
    "format": "png",
    "resource_type": "image",
    "created_at": "2024-07-17T06:50:24Z",
    "tags": [],
    "bytes": 138838,
    "type": "upload",
    "etag": "7116981ad2c526b5efa23e072faba99b",
    "placeholder": false,
    "url": "http://res.cloudinary.com/dwijckjzi/image/upload/v1721199024/portfolio/d0ylmugzhruqg2icqkfb.png",
    "secure_url": "https://res.cloudinary.com/dwijckjzi/image/upload/v1721199024/portfolio/d0ylmugzhruqg2icqkfb.png",
    "folder": "portfolio",
    "access_mode": "public",
    "original_filename": "localhost_5173_register"
}
  */

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Project Form</h1>

        <div className=" mx-auto max-w-lg px-4">
          <form
            onSubmit={handleSubmit(onSubmitCover)}
            className="flex justify-between items-end"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Cover Photo</span>
              </label>
              <input
                type="file"
                required
                className="file-input file-input-bordered"
                {...register("image")}
              />
            </div>
            <button
              type="submit"
              disabled={isLoadingCover}
              className="btn btn-outline"
            >
              Upload
            </button>
          </form>
          {!coverUrl && (
            <p className="bg-red-200 p-2 my-2 rounded">
              Cover photo is required
            </p>
          )}
          {coverUrl && (
            <Image
              //   src={imageUrl}
              src={coverUrl}
              alt="thumbnail"
              width={100}
              height={100}
              className="w-[100px]"
            />
          )}
        </div>

        <form
          className="p-4 space-y-2 mx-auto"
          onSubmit={handleFormSubmit}
          encType="multipart/form-data"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              className="input input-bordered"
              value={submitData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            {/* <textarea
              name="description"
              className="textarea textarea-bordered"
              value={submitData.description}
              onChange={handleChange}
              required
            /> */}
            <TextEditor defaultValue={content} onChange={setContent} />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Technologies</span>
            </label>
            <div className="flex items-center space-x-2 ">
              <input
                type="text"
                className="input input-bordered w-full"
                value={newTechnology}
                onChange={handleTechnologyChange}
                placeholder="Add technology"
              />
              <button
                type="button"
                className="btn btn-outline"
                onClick={addTechnology}
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap mt-2 space-x-2">
              {submitData.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="badge badge-warning flex items-center justify-between"
                >
                  <span>{tech}</span>
                  <button
                    type="button"
                    className="btn btn-sm btn-circle"
                    onClick={() => removeTechnology(tech)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Client Live</span>
            </label>
            <input
              type="text"
              name="clientLive"
              className="input input-bordered"
              value={submitData.clientLive}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Server Live</span>
            </label>
            <input
              type="text"
              name="serverLive"
              className="input input-bordered"
              value={submitData.serverLive}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Client Code</span>
            </label>
            <input
              type="text"
              name="clientCode"
              className="input input-bordered"
              value={submitData.clientCode}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Server Code</span>
            </label>
            <input
              type="text"
              name="serverCode"
              className="input input-bordered"
              value={submitData.serverCode}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Image Previews</span>
            </label>
            <div className="flex flex-wrap">
              {imagePreviews.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  width={150}
                  height={150}
                  alt={`Preview ${index}`}
                  className="h-[100px] w-auto m-2 border border-gray-800 rounded"
                />
              ))}
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload Images</span>
            </label>
            <input
              type="file"
              multiple
              className="file-input file-input-bordered"
              onChange={handleImageChange}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isLoading || !coverUrl}
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

export default Projects;
