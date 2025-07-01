"use client"
import React from 'react'
import Image from 'next/image'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"
import FormField from "@/components/ui/FormField"
import { toast } from 'sonner'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


const authFromSchema  = (type: FormType) => {
  return z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: type==="sign-up" ? z.string().min(3): z.string(),
  })
} 
const AuthForm = ({type}: {type:FormType}) => {
  const formSchema = authFromSchema(type);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
        if (type === "sign-up") {
          toast.success("Account created successfully!");
          router.push("/sign-in");
        } else {
          toast.success("Signed in successfully!");
          router.push("/");
        }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(`There was an error submitting the form: ${error}`);
    }
  }
  const isSignIn = type === "sign-in";
  return (

    <div className='card-border lg:min-w-[566px]'>
      <div className='flex flex-col gap-6 card py-14 px-10'>
        
        <div className='flex flex row gap-3 justify-center'>
          <Image src="logo.svg" alt="logo" height={32} width={38}/>
          <h2 className='text-primary-100'>AI Interview</h2>
        </div>

        <h3> Practice job interview with AI</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full mt-4 form">
          {!isSignIn && 
          (<FormField control={form.control}
                      name="name"
                      label="Name"
                      placeholder="Your Name"
                      type="text"/>
                    )}
          <FormField control={form.control}
                      name="email"
                      label="Email"
                      placeholder="Your Email"
                      type="email"/>
          <FormField control={form.control}
                      name="password"
                      label="Password"
                      placeholder="Your Password" 
                      type="password"/>
          <Button className='btn' type="submit"> {isSignIn? "Sign in": "Create an Account"} </Button>
          
        </form>
      </Form>
      <p className='text-center'>
        {isSignIn ? "Don't have an account?": "Already have an account?"}

        <Link href={!isSignIn ? '/sign-in': '/sign-up'} 
        className='text-user-primary font-bold ml-1'>
          {isSignIn ? "Sign up": "Sign in"}
        </Link>
      </p>
      </div>
    </div>
  )
}

export default AuthForm