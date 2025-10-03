"use client"
import { User } from "@prisma/client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModel from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import useRentModal from "@/app/hooks/useRentModal";

interface UserMenuProps {
    currentUser? : User | null
}

const UserMenu = ({currentUser}: UserMenuProps) => {
    const registerModal = useRegisterModal()
    const rentModal = useRentModal()
    const loginModal = useLoginModel()
    const [isOpen,setIsOpen] = useState(false);
     const toggleOpen = useCallback(() => {
            setIsOpen((value) =>  {
                return(!value)
            })
     },[])

     const onRent = useCallback(()=> {
        if (!currentUser) {
            return loginModal.onOpen()
        }

            rentModal.onOpen()
     },[rentModal,loginModal,currentUser])

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div onClick={onRent} className="hidden md:block text-sm border-[1px] border-gray-200 font-semibold py-3 px-4 rounded-full hover:bg-gray-100 transition cursor-pointer">Airbnb your home</div>
                <div onClick={toggleOpen} className="p-4 md:py-1 md:px-2 border-[1px] border-gray-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                    <AiOutlineMenu/>
                    <div className="hidden md:block">
                        <Avatar/>
                    </div>
                </div>
            </div>
            {isOpen ?  <div className="absolute rounded-xl border-[1px] border-gray-200 shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm pl-3 py-2 "> 
                <div className="flex flex-col cursor-pointer "> 
                    { currentUser ? (
                        <>
                          <MenuItem 
                        onClick={()=> {}}
                        label="My trips"
                        /> 

                        <MenuItem 
                        onClick={()=> {}}
                        label="My favorites"
                        />      
                        
                        <MenuItem 
                        onClick={()=> {}}
                        label="My reservation"
                        /> 

                        <MenuItem 
                        onClick={()=> {}}
                        label="My properties"
                        /> 

                        <MenuItem 
                        onClick={onRent}
                        label="Airbnb my home"
                        /> 

                        <MenuItem 
                        onClick={()=> signOut()}
                        label="Logout"
                        /> 

                        </>
                    ) : <>
                            <MenuItem 
                                onClick={loginModal.onOpen}
                                label="Login"
                             />   
                            <MenuItem 
                                onClick={registerModal.onOpen}
                                label="Sign up"
                             /> 
                        </>
                    }
                </div> 
            </div> : null}
        </div>
    )
}

export default UserMenu


 