import React from "react";
import {AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai';

const Footer=(props)=>{
    const count=props.page;
    const total=10;
    const setCount=props.setCount;
    function changeHandlerLeft(){
        setCount(count-1);
    }
    function changeHandlerRight(){
        if (count>9){
            setCount(10);
        }else{
            setCount(count+1);
        }
    }
    return (
        <div className="flex justify-between w-11/12  h-16 bg-blue-50 shadow-xl rounded-2xl mx-auto relative">
            <div className="mx-8 my-auto">
                <p className="font-semibold text-gray-600 text-lg">{count} from {total}</p>
            </div>
            <div className="flex mx-8 my-auto gap-6">
                {
                    count===10?<button className="w-[80px] px-6 bg-white rounded-lg shadow-md hover:bg-blue-200
                    " onClick={changeHandlerLeft}><AiOutlineArrowLeft className="text-3xl" ></AiOutlineArrowLeft></button>
                    :(
                        count>1?
                        <div className="flex gap-6">
                        <button className="w-[80px] px-6 bg-white rounded-lg shadow-md hover:bg-blue-200" onClick={changeHandlerLeft}><AiOutlineArrowLeft className="text-3xl" ></AiOutlineArrowLeft></button>
                        <button className="w-[80px] px-6 bg-white rounded-lg shadow-md hover:bg-blue-200" onClick={changeHandlerRight}><AiOutlineArrowRight className="text-3xl" ></AiOutlineArrowRight></button>
                        </div>
                        :<button className="w-[80px] px-6 bg-white rounded-lg shadow-md hover:bg-blue-200
                        " onClick={changeHandlerRight}><AiOutlineArrowRight className="text-3xl" ></AiOutlineArrowRight></button>
                    )
                }
            </div>
        </div>
    );
};
export default Footer;