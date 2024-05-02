import React, { useState } from "react";
import flag from "../../Asset/IN-India-Flag-icon.png";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../Configs/axios.config";
import { Button, TextField } from "@mui/material";

const Contact = () => {
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axiosInstance.post("/api/login/", {
      mobile_number: number,
    });
    console.log(response);
    alert(response.data.message);
    setPage(2);
  };

  const handleOtp = async (event) => {
    event.preventDefault();
    const reqbody = {
      mobile_otp: otp,
      mobile_number: number,
      registration_id: 123,
      registration_token: "",
      type: "web",
      device_id: "",
    };

    const varification = await axiosInstance.post(
      "/api/verify-login-otp/",
      reqbody
    );

    console.log(varification);
    localStorage.setItem("token", varification.data.token);
    navigate("/");
  };
  return (
    <div className="px-[5%] lg:pt-44">
      <div className="flex gap-1 cursor-pointer">
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <p>/</p>
        <Link to={"/contact"}>
          <p>Account</p>
        </Link>
      </div>

      {page === 1 ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center lg:p-32 p-10 items-center gap-5"
        >
          <p className="text-3xl">Login</p>
          <p className="text-sm">Enter your contact number to login.</p>
          <div className="flex border items-center w-96">
            <div className="flex items-center bg-[#f3efef] p-2">
              <img src={flag} alt="" className="h-8" />
              <p>+91</p>
            </div>
            <input
              type="text"
              onChange={(event) => setNumber(event.target.value)}
              className="outline-none p-2"
              placeholder="1234567890"
            />
          </div>
          <button
            type="submit"
            className="border w-96 text-center p-2 bg-[#82734e] text-white"
          >
            Login With OTP
          </button>
          <div className="flex justify-center gap-10 text-sm">
            <p>Create account </p>
            <p>Log In With Email</p>
          </div>
        </form>
      ) : (
        <form onSubmit={handleOtp}>
          <div className="flex flex-col gap-4 p-20 justify-center items-center text-center">
            <p>Verifying OTP</p>
            <p>
              We have send a one time password to your mobile number {number}.
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => setPage(1)}
              >
                Edit
              </span>
            </p>
            <div className="flex flex-col gap-2">
              <TextField
                id="outlined-basic"
                label="Enter OTP"
                type="text"
                variant="outlined"
                onChange={(event) => setOtp(event.target.value)}
              />
              <p className="text-blue-500" onClick={handleSubmit}>
                Resend OTP
              </p>
            </div>
            <Button type="submit">VERIFY</Button>
          </div>
        </form>
      )}
      <form></form>
    </div>
  );
};

export default Contact;
