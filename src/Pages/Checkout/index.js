import React, { useEffect, useState } from "react";
import buynow from "../../Asset/BuyItNow.png";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../Configs/axios.config";

const Checkout = () => {
  const { variant_id } = useParams();
  const [data, setData] = useState([]);
  const getPostFn = async () => {
    const response = await axiosInstance.post(`/api/buy-now/`, {
      variant_id,
      add_quantity: 1,
    });
    console.log(response);
    setData(response.data.data.buy_now_product_list);
  };
  useEffect(() => {
    getPostFn();
  }, []);
  console.log(data);
  return (
    <div className="flex p-36 gap-10 px-36">
      <div className="w-[50%] flex flex-col gap-3">
        <div className="flex justify-between">
          <p className="font-semibold text-lg">Contact</p>
          <button className="text-blue-600 underline">Log in</button>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="border w-full p-3 rounded"
          />
          <div className="flex items-center gap-1">
            <input type="checkbox" className="size-4" />
            <p className="text-sm">Email me with news and offers</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-lg">Delivery</p>
          <select name="" id="" className="border p-3 rounded">
            <option value="">Country</option>
            <option value="">India</option>
          </select>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="First name"
              className="border p-3 rounded w-full"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border p-3 rounded w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Company (optional)"
            className="border p-3 rounded w-full"
          />
          <input
            type="text"
            placeholder="Address"
            className="border p-3 rounded w-full"
          />
          <input
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
            className="border p-3 rounded w-full"
          />
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="City"
              className="border p-3 rounded w-full"
            />
            <select name="" id="" className="border p-3 rounded w-full">
              <option value="">State</option>
              <option value="">India</option>
            </select>
            <input
              type="text"
              placeholder="PIN Code"
              className="border p-3 rounded w-full"
            />
          </div>
          <input
            type="number"
            placeholder="Phone"
            className="border p-3 rounded w-full"
          />
        </div>
        <div className="flex items-center gap-1">
          <input type="checkbox" className="size-4" />
          <p className="text-sm">Save this information for next time</p>
        </div>
        <div className="flex items-center gap-1">
          <input type="checkbox" className="size-4" />
          <p className="text-sm">Text me with news and offers</p>
        </div>
        <p className=" font-semibold">Shipping method</p>
        <p className="bg-[#f5f5f5] p-3 rounded">
          Enter your shipping address to view available shipping methods.
        </p>
        <div className="flex flex-col">
          <p className="text-lg font-semibold">Payment</p>
          <p>All transactions are secure and encrypted.</p>
          <div className="flex justify-between border  border-blue-600 rounded p-4 bg-[#f2f7ff]">
            <p>Paytm Payment Gateway</p>
            <div className="flex">
              <img
                src={
                  "https://cdn.shopify.com/shopifycloud/checkout-web/assets/0169695890db3db16bfe.svg"
                }
                alt=""
              />
              <img
                src={
                  "https://cdn.shopify.com/shopifycloud/checkout-web/assets/5e3b05b68f3d31b87e84.svg"
                }
                alt=""
              />
              <img
                src={
                  "https://cdn.shopify.com/shopifycloud/checkout-web/assets/bfaa13c64b6ea06f289f.svg"
                }
                alt=""
              />
              <img
                src={
                  "https://cdn.shopify.com/shopifycloud/checkout-web/assets/803a640da9d99f1de41c.svg"
                }
                alt=""
              />
              <img
                src={
                  "https://cdn.shopify.com/shopifycloud/checkout-web/assets/37fc65d0d7ac30da3b0c.svg"
                }
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 bg-[#f5f5f5] p-3 justify-center text-center items-center">
              <img src={buynow} alt="" className="h-24" />
              <p className="px-24 text-sm">
                After clicking “Pay now”, you will be redirected to Paytm
                Payment Gateway to complete your purchase securely.
              </p>
            </div>
            <button className="p-3 bg-[#197bbd] text-white rounded">
              Pay now
            </button>
          </div>
        </div>
        <hr />
        <div className="flex gap-5 *:text-sm *:text-blue-500 *:underline">
          <button>Refund policy.</button>
          <button>Privacy policy.</button>
        </div>
      </div>

      <div className="w-[50%]">
        {data?.map((event) => {
          return (
            <>
              <div className="flex gap-2 items-center">
                <img src={event.variant_image} alt="" className="h-20" />
                <p className="text-sm">{event.product_variant_name}</p>
                <p>₹{event.price}</p>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Discount code or gift card"
                  className="border p-3 w-full rounded"
                />
                <button className="border p-3 bg-slate-200 rounded">
                  Apply
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>{event.buy_total_price}</p>
                </div>
                <div className="flex justify-between">
                  <p>Shipping</p>
                  <p>Enter shipping address</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold text-lg">Total:</p>
                  <p>
                    <sub>INR</sub> ₹ {event.buy_total_amount}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
