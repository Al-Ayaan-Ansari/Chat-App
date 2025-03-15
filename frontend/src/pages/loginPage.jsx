import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import {EyeOff, MessageSquare,User,Eye,Lock, Mail} from "lucide-react";
import {Link} from "react-router-dom"
import AuthImagePattern from "../components/authImagePattern";

import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

function LoginPage() {
  const [showPassword,setShowPassword] = useState(false);
  const [formData,setFormData] = useState({
    email:"",
    password:"",
  });

  const {login,isLoginingUp} =useAuthStore();
  const validateForm =  () =>{
    if(!formData.email.trim()) return toast.error("email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();
    if (success === true) login(formData);
  };
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
    {/* {left side} */}

      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">

          {/* {LOGO DIV} */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div 
              className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <MessageSquare className="size-6 text-primary"/>
              </div>
              <h1 className="text-2xl font-bold mt-2">Create Content</h1>
              <p className="text-base-content/60">Get started with YOUR free account</p>
            </div>
          </div>

          {/* {FORM} */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Mail</span>
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="size-5 text-base-content/40"/>
                </div>
                <input
							  type='email'
							  placeholder='you@example.com'
							  className={`w-full input input-bordered  pl-10`}
							  value={formData.email}
							  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
						    />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="size-5 text-base-content/40"/>
                </div>
                <input
							  type={showPassword ? "text" : "password"}
							  placeholder='***'
							  className='w-full input input-bordered  pl-10'
							  value={formData.password}
							  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
						    />
                <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={()=> setShowPassword(!showPassword)}>
                {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40" />
                  ) : (
                    <Eye className="size-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-full" disabled={isLoginingUp}>
              {isLoginingUp ? (
                <>
                <Loader2 className="size-5 animate-spin"/>
                Loading...
                </>
              ):("Login")
              }
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
            don't have an Account?{" "} 
            <Link to={"/signup"} className="link link-primary">
            Sign Up
            </Link>
            </p>
          </div>
        </div>
      </div>
      {/* RIGHT SIDE DECORATION */}


      <AuthImagePattern
      title="Join in the conversation"
      subtitle="stay in touch with your friends, family, friends and Loved ones."
      />
    </div>
  )
}

export default LoginPage;