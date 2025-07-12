import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidate from "../utils/Validate";
const Login = () => {
  const [isLogged,setisLogged]=useState(false);
  const [error,setError]=useState(null);
  const name= useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  const handleLogin=()=>{
    const message= checkValidate(name.current.value,email.current.value,password.current.value);
    if(message!=""){
        setError(message); 
    }
  }
  const handleOption=()=>{
    setisLogged(!isLogged);
  }
  return (
    <>
      <Header />
      <div className="login relative w-screen h-screen z-1 top-0 left-0">
        <div class="container">
          <img className="w-screen absolute h-screen object-cover" src="/homenetflixbg.jpg" alt="bg-image"/>
          <div className="loginform absolute w-96 z-2 p-6 bg-black opacity-70 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <form onSubmit={(e)=>e.preventDefault()}>
               {error!=null && <p className="bold-2 text-red-700 my-2">{error}</p> }
               {!isLogged && (
                 <input ref={name} className="w-full p-2 my-2 bg-white" placeholder="name" type="text" name="name"/>
               )}
                <input ref={email} className="w-full p-2 my-2 bg-white" placeholder="email" type="email" name="email"/>
                <input ref={password} className="w-full p-2 my-2 bg-white" placeholder="password" type="password" name="password"/>
                <button onClick={handleLogin} className="bg-red-800 p-2 my-2 w-full">{isLogged? 'Sign In':'Sign Up'}</button>
            </form>
            <p className="mt-2 cursor-pointer text-red-700" onClick={handleOption}>{isLogged? 'New User? Sign up':'Already a user? Please Sign In'}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
