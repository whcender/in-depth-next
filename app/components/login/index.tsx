"use client"
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { openModalFunc } from "@/app/redux/moduleSlice";
import { type } from "os";

const Index: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    email,
    password,
  };


  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // not real api
    axios.post("/api/register", data)
      .then((res) => {
        console.log(res);
        toast.success("Login Success");
        dispatch(openModalFunc());
      })
      .catch((err) => {
        console.log(err);
        toast.error("Login Failed");
      });
  };

  return (
    <div className="w-full">
      <form className="flex flex-col gap-4 w-full p-5" onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="email"
          className="outline-none border p-3 w-full"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="password"
          className="outline-none border p-3 w-full"
        />
        <button type="submit" className="bg-black text-white p-3 w-full hover:bg-slate-900">
          Login
        </button>
      </form>
    </div>
  );
};

export default Index;
