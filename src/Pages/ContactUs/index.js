import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <div className="px-[5%] pt-44">
        <div className="flex gap-1 items-center cursor-pointer">
          <Link to={"/"}>
            <p className="text-sm">HOME</p>
          </Link>
          <p>/</p>
          <Link to={"/contact_us"}>
            <p className="text-sm">CONTACT US</p>
          </Link>
        </div>
        <div className="flex flex-col justify-center p-32 items-center gap-5">
          <p className="text-3xl">CONTACT US</p>
          <input
            type="text"
            className="border w-[30rem] p-2"
            placeholder="Name"
          />
          <input
            type="email"
            className="border w-[30rem] p-2"
            placeholder="Email"
          />
          <input
            type="text"
            className="border w-[30rem] p-2"
            placeholder="Message"
          />

          <p className="border w-[30rem] text-center p-2 bg-[#82734e] text-white">
            SEND
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center p-32 items-center gap-5 bg-[#f6f5f3]">
        <p className="text-4xl">Our Corporate Office</p>
        <p className="text-xl">INDIVINITY CLOTHING RETAIL PRIVATE LIMITED</p>
        <div>
          <p>Plot No - 707, Sector-37, Pace City II.</p>
          <p>Gurgaon, Haryana - 122002</p>
        </div>
        <p>Email : tasva@abfrl.adityabirla.com</p>
        <p>For Careers : career.tasva@abfrl.adityabirla.com</p>
        <p>Phone: +91 7406108844 | Mon - Fri: 11am - 6pm</p>
      </div>
    </>
  );
};

export default ContactUs;
