"use client";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { storeUserInfo } from "@/services/actions/auth.services";
import { userLogin } from "@/services/actions/userLogin";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
const LoginPage = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const res = await userLogin(formData);

      if (res?.data?.accessToken) {
        // Successful login
        toast.success(res?.message);
        storeUserInfo({ token: res?.data?.accessToken });
        dispatch(setUser({ user: res.data, token: res.data.accessToken }));
      } else {
        // Failed login
        toast.error(res?.message);
        console.log(res);
      }
    } catch (err: any) {
      console.log(err);
      // toast.error("Invalid credentials, Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md bg-gray-200 rounded-lg">
        <form className="card-body" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold text-center text-gray-500">
            Login now!
          </h1>
          <div className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                value={formData.email}
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
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-control mt-4">
            <button
              type="submit"
              className="bg-gray-500 hover:bg-gray-600 rounded-full px-4 py-2 text-white w-full"
            >
              Login
            </button>
          </div>
          <div className="text-center mt-2">
            {`Don't have an account?`}
            <Link
              href="/register"
              className="underline ms-2 hover:text-blue-500"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
