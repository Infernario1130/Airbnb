"use client"

import { AiFillGithub } from "react-icons/ai";
import { useCallback, useState } from "react";
import { FieldValues,SubmitHandler,useForm } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";
import useLoginModel from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginModal = () => {

    const loginModal = useLoginModel();
    const registerModal = useRegisterModal()
    const [isLoading,setIsLoading] = useState(false);
    const router = useRouter();
    const { register,handleSubmit,formState: {
        errors,
    }} = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true)

    const response = await signIn("credentials",{
        ...data,
        redirect:false
    })

    setIsLoading(false);

    if (response?.ok) {
        toast.success("Logged in")
        router.refresh();
        loginModal.onClose()
    }

    if(response?.error) {
        toast.error("Something went wrong.")
    }
}

    const toggle = useCallback(()=> {
        loginModal.onClose()
        registerModal.onOpen()
    },[loginModal,registerModal])

    const bodyContent = (
        <div className="flex flex-col gap-4 text-black">
           <Heading 
           title="Welcome back"
           subtitle="Log in to your account"/>
           <Input
           id="email"
           label="Email"
           disabled={isLoading}
           register={register}
           errors={errors}
           required/>

          <Input
           id="password"
           label="Password"
           type="password"
           disabled={isLoading}
           register={register}
           errors={errors}
           required/>
        </div>
        
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3 text-black">
            <hr/>
            
            <Button outline label="Continue with Github" icon={AiFillGithub} onClick={()=> signIn("github")}/>
            
            <div className="text-neutral-500 text-center mt-4 font-light">
                <div className="flex flex-row justify-center items-center gap-2">
                    <div>
                        Do not have an account?
                    </div>

                    <div onClick={toggle} className="text-neutral-800 cursor-pointer hover:underline">
                        Create an account
                    </div>
                </div>
            </div>
        </div>
    )

    return (
       <div>
         <Modal disabled={isLoading}
        isOpen={loginModal.isOpen}
        title="Log in"
        actionLabel="Continue"
        onClose={loginModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
        />
       </div>
    )
}

export default LoginModal;