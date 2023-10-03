import React from "react";
import {BsPeople} from 'react-icons/bs';
import {BiGasPump} from 'react-icons/bi';
import {SlSpeedometer} from 'react-icons/sl';
import {PiSteeringWheelBold} from 'react-icons/pi';
import {AiOutlineHeart} from 'react-icons/ai';

const Card=(prop)=>{
    const data=prop.data;
    return (
        <div className="bg-blue-50 w-[350px] rounded-xl font-poppins shadow-2xl py-2">
            <img className="h-[250px] w-[340px] object-cover rounded-3xl p-1 mx-auto shadow-sm 
                            " src={data.image} alt="img"></img>
            <div className="flex justify-between text-cyan-950 my-4">
                <div className="flex gap-1 text-lg mx-2 font-semibold">
                    <p>{data.Company}</p>
                    <p className="capitalize">{data.model}</p>
                </div>
                <div className="border-2 border-blue-400 border-dashed mx-6 rounded-full ">
                    <span className="m-4 my-1 text-md font-bold">{data.year}</span>
                </div>
            </div>
            <div className="flex justify-between w-[280px] my-2">
                <div className="flex w-1/2 flex-wrap">
                    <BsPeople className="text-2xl mx-2 my-1 text-blue-500"></BsPeople>
                    <p className="capitalize py-1 font-semibold text-gray-600">{data.seater} people</p>
                </div>
                <div className="flex w-1/2 flex-warp">
                    <BiGasPump className="text-2xl mx-2 my-1 text-blue-500 "></BiGasPump>
                    <p className="py-1 font-semibold text-gray-600 ">{data.fuel}</p>
                </div>
            </div>
            <div className="flex justify-between w-[280px] my-2">
                <div className="flex w-1/2 flex-warp">
                    <SlSpeedometer className="text-2xl mx-2 my-1 text-blue-500"></SlSpeedometer>
                    <p className="py-1 capitalize font-semibold text-gray-600">{data.mileage} km/Litre</p>
                </div>
                <div className="flex w-1/2 flex-warp">
                    <PiSteeringWheelBold className="text-2xl mx-2 my-1 text-blue-500"></PiSteeringWheelBold>
                    <p className="py-1 font-semibold text-gray-600 ">{data.transmission}</p>
                </div>
            </div>
            <div className="border border-gray-300 w-[300px] h-[1px] mx-2 my-4"></div>
            <div className="flex gap-x-12">
                <p><span className="text-2xl text-gray-700 font-semibold ml-2">${data.price}</span>/<span
                className=" text-gray-600 font-semibold py-1">month</span></p>
                <div className="flex gap-x-3 ml-2 mb-3">
                    <div className="bg-blue-100 w-fit h-fit p-2 rounded-2xl"><AiOutlineHeart className="text-2xl text-blue-500"></AiOutlineHeart></div>
                    <button className="bg-blue-500 text-white font-bold py-2 px-3 rounded-xl
                                        hover:bg-blue-400">Rent now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;