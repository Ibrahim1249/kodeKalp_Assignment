import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { GithubIcon } from "lucide-react";
import register from "../assets/register.jpg";
import { useState } from "react";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from 'lucide-react'

export function Register() {
  const { toast } = useToast()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [user , setUser]  = useState({
    username:"",
    email:"",
    password :""
  })

  const handleChange = (e)=>{
     const {name , value} = e.target;
     setUser((prev)=>{
       return {...prev , [name] : value}
     })
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()

    try{
      setIsLoading(true)
        const response = await axios.post("https://kodekalp-assignment-wvts.onrender.com/api/v1/register" , {...user})
        console.log(response)
        setIsLoading(false)
        if (response.status === 201) {
          toast({
            title: "Message Sent",
            description: "You have Register successfully Please check your email !!.",
          })
          setUser({
            username:"",
            email:"",
            password :""
          })
          navigate("/login")
        }
    }catch(error){
      console.log(error)
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      })
      setIsLoading(false)
    }
 }


  return (
    <>
       <div className="min-h-screen flex bg-gray-900">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-white">Welcome back</h2>
            <p className="mt-2 text-sm text-gray-400">
            Sign up and start your journey
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="username" className="text-white">
                  Username
                </Label>
                <Input
                  id="username"
                  type="text"
                  name="username"
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  placeholder="johndoe"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  placeholder="john@example.com"
                  onChange={handleChange}
                />
              </div>
              <div className="relative">
                <Label htmlFor="password" className="text-white">
                  Password
                </Label>
                <Input
                  id="password"
                  type={isOpen ? "text" : "password"}
                  name="password"
                  required
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  placeholder="••••••••"
                  onChange={handleChange}
                />
                <span
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className="absolute top-7 right-2 p-2 cursor-pointer "
                >
                  {isOpen ? (
                    <EyeOpenIcon className="fill-white" />
                  ) : (
                    <EyeClosedIcon className="fill-white" />
                  )}
                </span>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
            >
             {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                'Create account'
              )}
            </Button>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full border-t border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="w-full border-gray-700  text-slate-800 hover:bg-gray-200"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                  />
                </svg>
                Google
              </Button>
              <Button
                variant="outline"
                className="w-full border-gray-700  text-slate-800 hover:bg-gray-200"
              >
                <GithubIcon className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Log in
            </Link>
          </p>

        </div>
      </div>
      <div className="hidden lg:block lg:w-3/5 relative h-screen overflow-hidden">
        <img
          src={register}
          alt="Login background"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent" />
      </div>
    </div>
    </>
  );
}