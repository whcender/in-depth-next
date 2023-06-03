"use client"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Auth from "../modal/auth";
import { useDispatch } from 'react-redux';
import { openModalFunc } from '@/app/redux/moduleSlice';


const UserMenu = () => {
    const [open, setOpen] = useState(false);
    const [showAuth, setShowAuth] = useState(false);
    const [authType, setauthType] = useState(" ");

    // i just wanted to use redux toolkit :)
    const dispatch = useDispatch();

    const handleLoginAuthClick = () => {
        setOpen(false);
        setShowAuth(true);
        setauthType("login");
        dispatch(openModalFunc())
    };

    const handleRegisterAuthClick = () => {
        setOpen(false);
        setShowAuth(true);
        setauthType("register");
        dispatch(openModalFunc())
    };
    
    return (
        <>
            {showAuth && <Auth authtype = {authType} setAuthType= {setauthType}/>}

            <div className="relative flex items-center">
                <GiHamburgerMenu
                    onClick={() => {
                        setOpen(!open);
                    }}
                    size={22}
                    className="cursor-pointer"
                />
                <div
                    className={`absolute top-12 left-0 bg-white w-44 p-6 shadow-xl ${open ? "block" : "hidden"
                        }`}
                >
                    <ul className="flex flex-col gap-2 cursor-pointer">
                        <li onClick={handleLoginAuthClick 
                        } className="hover:bg-gray-100 p-2">
                            Giriş Yap
                        </li>
                        <li onClick={handleRegisterAuthClick 
                        }
                         className="hover:bg-gray-100 p-2">Kayıt Ol</li>
                    </ul>
                </div>
            </div>
        </>

    );
};

export default UserMenu;
