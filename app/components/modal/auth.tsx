import React from 'react';
import Login from '../login';
import Register from '../register';
import { AiFillCloseSquare } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { openModalFunc } from '@/app/redux/moduleSlice';
import { RootState } from '@/app/redux/store';

type Props = {
  authtype: string;
  setAuthType: React.Dispatch<React.SetStateAction<string>>;
};

const Auth: React.FC<Props> = ({ authtype, setAuthType }) => {
  const dispatch = useDispatch();
  const { openModal } = useSelector((state: RootState) => state.modal);

  if (!openModal) return null;
  return (
    <div className='bg-transition z-50 absolute bg-black left-0 top-0 opacity-60 h-[100vh] w-full flex items-center justify-center'>
      <div className='bg-white h-[600px] w-1/3 flex justify-center items-center flex-col relative rounded-lg'>
        <div className='flex justify-around w-full absolute rounded-lg top-0'>
          <button className='bg-slate-300 p-3 w-1/2 hover:bg-slate-200 ' onClick={() => {
            setAuthType("login");
          }}>Login</button>
          <button className='bg-slate-300 p-3 w-1/2 hover:bg-slate-200' onClick={() => {
            setAuthType("register");
          }}>Register</button>
          <button className='bg-slate-300 p-3  hover:bg-slate-200'>
            <AiFillCloseSquare size={30} onClick={() => {
              dispatch(openModalFunc());
            }} />
          </button>
        </div>
        {authtype === "login" ? <Login />  : authtype === "register" && <Register />}
      </div>
    </div>
  );
};

export default Auth;
