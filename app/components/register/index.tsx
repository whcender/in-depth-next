"use client"
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { openModalFunc } from "@/app/redux/moduleSlice";

const Index: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    username,
    email,
    password,
  };

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("/api/register", data)
      .then((res) => {
        console.log(res);
        toast.success("Register Success");
        dispatch(openModalFunc());
      })
      .catch((err) => {
        console.log(err);
        toast.error("Register Failed");
      });
  };

  return (
    <div className="w-full">
      <form className="flex flex-col gap-4 w-full p-5" onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="username"
          className="outline-none border p-3 w-full"
        />
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Index;
