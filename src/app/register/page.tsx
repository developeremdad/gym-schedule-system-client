"use client";
import { useAppDispatch } from "@/redux/hooks";
import { registerTrainee } from "@/services/actions/registerTrainee";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
const RegisterPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (data?.password !== data?.confirmPassword) {
      toast.error("Confirm Password does not match");
    }

    const registerData = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await registerTrainee(registerData);
      toast.success(res?.message);
      router.push("/login");
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md bg-gray-200 rounded-lg">
        <form className="card-body" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold text-center text-gray-500">
            Register
          </h1>
          <div className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="input input-bordered"
                value={data.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                value={data.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                value={data.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="input input-bordered"
                value={data.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-control mt-5">
            <button
              type="submit"
              className="bg-gray-500 hover:bg-gray-600 rounded-full px-4 py-2 text-white w-full"
            >
              Register
            </button>
          </div>
          <div className="text-center mt-2">
            {`If have an account?`}
            <Link href="/login" className="underline ms-2 hover:text-blue-500">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
