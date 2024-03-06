"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const LoginForm = () => {
  const router = useRouter()
  const [loading,setLoading]=useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
 
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
     // console.log(formData);
      try {
        
       setLoading(true)
        const result = await signIn( "credentials",{email:formData.email, password:formData.password,redirect:false})
       setLoading(false)

         if(result.error){
          setLoading(false)
          toast.error("Invalid credentials")
         }
         if(result.ok){
          setLoading(false)
          router.replace("/profile")
          toast.success("User loggedIn successfully")
         }

       
       } catch (error) {
        setLoading(false)
         toast.error("User loggedIn occoer")
       }
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen ">
      <div className=" my-10 ">
        <h1 className=" text-3xl font-bold mb-4 text-center ">Sign In</h1>
        <form
          onSubmit={handleSubmit}
          className=" py-10 rounded-lg shadow-lg flex flex-col bg-gray-200 px-6 md:px-10 "
        >
          <div className=" flex flex-col ">
            <label className=" mb-2 ">Email</label>
            <input
              className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className=" text-sm text-red-500 ">{errors.email}</span>
            )}
          </div>
          <div className=" flex flex-col ">
            <label className=" mb-2 ">Password</label>
            <input
              className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 outline-none focus:border-gray-600 text-black "
              type="text"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className=" text-sm text-red-500 ">{errors.password}</span>
            )}
          </div>

          <button
          disabled={loading}
            type="submit"
            className=" p-2 border rounded-lg bg-blue-500 text-white border-gray-300 mt-2 mb-4 focus:border-gray-600"
          >
            {loading?"Loading...":"Login"}
          </button>
          <span className=" text-right ">
            Don`t Have an account ?
            <Link href="/signup" className=" text-blue-600 underline pl-2 ">
              Sign up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
