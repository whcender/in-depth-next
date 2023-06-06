"use client"
import React, { useEffect, useState } from 'react';
import Login from '../login';
import Register from '../register';
import { AiFillCloseSquare } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { openModalFunc } from '@/app/redux/moduleSlice';
import { RootState } from '@/app/redux/store';
import Image from 'next/image';
import { User } from '@prisma/client';

type Props = {
  authtype: string;
  setAuthType: React.Dispatch<React.SetStateAction<string>>;
  user: User | any | undefined;
};

const Auth = ({ authtype, setAuthType, user }: Props) => {
  const dispatch = useDispatch();
  const { openModal } = useSelector((state: RootState) => state.modal);


  // user controller



  if (!openModal) return null;
  return (
    <div className='bg-transition z-50 absolute bg-black bg-opacity-60 left-0 top-0  h-[100vh] w-full flex items-center justify-center'>
      <div className='bg-white h-[600px] opacity-100 w-1/3 flex justify-center items-center flex-col relative rounded-lg'>
        <div className='flex justify-around w-full absolute rounded-lg top-0'>
          {
            user ? (
              <>
                <p>girdin zati</p>
              </>
            ) : (
              <>
                        <button className={`bg-slate-300 p-3 w-1/2 hover:bg-slate-200 ${authtype === "login" ? "border-b-4" : "bg-slate-300"}`} onClick={() => {
            setAuthType("login");
          }}>Login</button>
          <button className={`bg-slate-300 p-3 w-1/2 hover:bg-slate-200 ${authtype === "register" ? "border-b-4" : "bg-slate-300"}`} onClick={() => {
            setAuthType("register");
          }}>Register</button>
          <button className={`bg-slate-300 p-3  hover:bg-slate-200`}>
            <AiFillCloseSquare size={30} onClick={() => {
              dispatch(openModalFunc());
            }} />
          </button>
              </>
            )
          }
  
        </div>
        {authtype === "login" ? <Login /> : authtype === "register" && <Register />}
        <button className="bg-white flex justify-center items-center gap-2 border text-black p-3 w-5/6 hover:bg-slate-200 ">Login With
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt='google' width={70} height={70} />
        </button>
      </div>
    </div>
  );
};

export default Auth;