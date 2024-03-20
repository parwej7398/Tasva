import React from "react";
import flag from "../../Asset/IN-India-Flag-icon.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="px-[5%] pt-44">
      <div className="flex gap-1 cursor-pointer">
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <p>/</p>
        <Link to={"/contact"}>
          <p>Account</p>
        </Link>
      </div>
      <div className="flex flex-col justify-center p-32 items-center gap-5">
        <p className="text-3xl">Login</p>
        <p className="text-sm">Enter your contact number to login.</p>
        <div className="flex border items-center w-96">
          <div className="flex bg-[#f3efef] p-2">
            <img src={flag} alt="" className="h-8" />
            <p>+91</p>
          </div>

          <input
            type="text"
            className="outline-none p-2"
            placeholder="1234567890"
          />
        </div>
        <p className="border w-96 text-center p-2 bg-[#82734e] text-white">
          Login With OTP
        </p>
        <div className="flex justify-center gap-10 text-sm">
          <p>Create account </p>
          <p>Log In With Email</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
