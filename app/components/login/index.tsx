import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { openModalFunc } from "@/app/redux/moduleSlice";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Index: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    email,
    password,
  };

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn("credentials", {
      ...data,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.ok) {
          dispatch(openModalFunc());
          router.refresh();
          toast.success("Login Success");
        }
        if (callback?.error) {
          toast.error("Login Failed");
        }
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
        <button
          type="submit"
          className="bg-black text-white p-3 w-full hover:bg-slate-900"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Index;
