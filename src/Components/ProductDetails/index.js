import React, { useEffect, useReducer, useState } from "react";
import { axiosInstance } from "../../Configs/axios.config";
import { useNavigate, useParams } from "react-router-dom";

const reducer = (count, action) => {
  if (action.type === "Increment") return count + 1;
  if (action.type === "Decrement") return count - 1;
  if (action.type === "Add") return count + Number(action.value);
};
const ProductDetails = () => {
  const navigate = useNavigate();
  const { product_id, variant_id } = useParams();
  const [data, setData] = useState([]);
  const [count, dispatch] = useReducer(reducer, 1);
  const [ramVariant, setRamVariant] = useState([]);
  const [thumbnail, setThumbnail] = useState("");
  const [colorId, setColorId] = useState("");
  const [storageId, setStorageId] = useState("");
  const [otherId, setOtherId] = useState("");
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState(false);

  const getPostFn = async () => {
    try {
      const response = await axiosInstance.get(
        `api/product-details-api/?product_id=${product_id}&variant_id=${variant_id}`
      );
      console.log(response);
      setData(response.data.data);
      setRamVariant(response.data.data.other_variant_values);
      setOtherId(response.data.data.other_variant_value);
      setStorageId(response.data.data.storage_variant_value);
      setColorId(response.data.data.color_variant_value);
      setThumbnail(response.data.data.variant_images?.[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const getPostFn2 = async () => {
    const response = await axiosInstance.get(
      `https://app1.crazzyhub.com/api/product-variant-filter-api/?product_id=${product_id}&variant_id=${variant_id}&color_variant_id=${colorId}&storage_variant_id=${storageId}&other_variant_id=${otherId}&search=${search}`
    );
    setData(response.data.data);
    setThumbnail(response.data.data.variant_images?.[0]);
  };
  useEffect(() => {
    search && getPostFn2();
  }, [response]);

  useEffect(() => {
    getPostFn();
  }, []);
  return (
    <div className=" flex justify-center items-center gap-6 pt-[10%] p-5 px-[10%]">
      <div className="w-[50%]">
        <img src={thumbnail} alt="" />
        <div className="flex justify-center">
          {data?.variant_images?.map((j, index) => {
            return (
              <div key={index}>
                <img
                  src={j}
                  alt=""
                  className="h-24"
                  onClick={() => setThumbnail(j)}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[40%] flex flex-col gap-3">
        <p className="text-xl font-semibold font-sans">
          {data.product_variant_name}
        </p>
        <p
          className="font-bold text-lg text-green-600"
          style={{
            color: data.stock_sataus === "In-stock" ? "green" : "red",
          }}
        >
          {data.stock_sataus}
        </p>
        <div className="flex gap-2 items-center">
          <p className="font-bold p-1 rounded text-lg shadow shadow-slate-300 uppercase text-[#fa7516]">
            ₹{data.price}
          </p>
          <s className="font-bold shadow rounded p-1 shadow-slate-300 uppercase">
            MRP ₹{data.mrp}
          </s>
          <p className="font-semibold shadow shadow-slate-300 p-1 text-white bg-green-500 rounded px-1">
            {data.discount_percent} % off
          </p>
        </div>
        <p className="text-xs font-bold uppercase">{data.color_variant}</p>
        <div className="flex gap-3">
          {data?.variant_color_values?.map((item, index) => {
            return (
              <div
                key={index}
                className="border-2 shadow shadow-slate-500 rounded p-1"
                style={{
                  borderColor: colorId === item.id ? "red" : "",
                }}
              >
                <img
                  src={item.variant_image}
                  alt=""
                  className="h-20"
                  onClick={() => {
                    setColorId(item.id);
                    setSearch("color");
                    setResponse(!response);
                  }}
                />
                <p>{item.value}</p>
              </div>
            );
          })}
        </div>

        <p className="text-sm font-semibold">{data.other_variant}</p>
        <div className="flex gap-5">
          {ramVariant?.map((item, index) => {
            return (
              <button
                key={index}
                className="border-2 shadow shadow-slate-500 rounded p-1"
                style={{
                  borderColor: otherId === item.id ? "red" : "",
                }}
                onClick={() => {
                  setOtherId(item.id);
                  setSearch("other");
                  setResponse(!response);
                }}
              >
                {item.value}
              </button>
            );
          })}
        </div>

        <p className="text-xs font-bold uppercase">{data.storage_variant}</p>
        <div className="flex gap-5">
          {data?.variant_storage_values?.map((item, index) => {
            return (
              <button
                key={index}
                className="border-2 shadow shadow-slate-500 rounded p-1"
                style={{
                  borderColor: storageId === item.id ? "red" : "",
                }}
                onClick={() => {
                  setStorageId(item.id);
                  setSearch("storage");
                  setResponse(!response);
                }}
              >
                {item.value}
              </button>
            );
          })}
        </div>

        <div className="flex items-center mt-3 gap-5">
          <p className=" flex gap-3 border justify-center p-3 text-sm  w-[20%] border-[#837348]">
            <button
              variant="contained"
              color="error"
              onClick={() => dispatch({ type: "Decrement" })}
            >
              -
            </button>
            <button>{count}</button>
            <button
              variant="contained"
              color="success"
              onClick={() => dispatch({ type: "Increment" })}
            >
              +
            </button>
          </p>
          <button className="border p-3 w-[50%] text-center text-[#837348] text-sm border-[#837348]">
            ADD TO CARD
          </button>
        </div>
        <div onClick={() => navigate(`/checkout/${variant_id}`)}>
          <button className="p-3 bg-[#82734e] border-[#837348] mt-2 w-[74.2%] text-white">
            BUY IT NOW
          </button>
        </div>

        <p>
          The order will be delivered within 7-10 days after placing the order
        </p>
        <p>
          Product color may slightly vary due to photographic lighting sources
          or your screen settings.
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
