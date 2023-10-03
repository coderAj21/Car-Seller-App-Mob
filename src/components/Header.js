import React, { useState } from "react";
import {AiOutlineSearch} from 'react-icons/ai';
import {BiChevronDown} from 'react-icons/bi';


const Header=(props)=>{
    const setSearch=props.setSearch;
    const[val,setVal]=useState("");
    function changeHandler(event){
        let input=event.target.value;
        if (input.length===0){
            setSearch("");
        }
        input=input.trim();
        setVal(input);
    }
    function clickHandler(){
        // console.log(val);
        setSearch(val);
    }
    return (
        <div className="flex w-11/12  h-16 bg-blue-50 shadow-xl rounded-2xl mx-auto relative ">
            <div className="flex mx-8 my-3">
                <input placeholder="Search..."
                className="pl-4 font-semibold text-gray-600 h-8 w-[300px] rounded-xl"
                onChange={changeHandler}                       
                        ></input>
                <AiOutlineSearch className="my-1 text-2xl absolute left-[290px] hover:bg-blue-50"
                 onClick={clickHandler}></AiOutlineSearch>
            </div>
            <div className="flex mx-6 my-3">
                <label className="font-semibold text-gray-600 text-md">Relevane</label>
                <BiChevronDown className="my-1"></BiChevronDown>
            </div>
            <div className="flex mx-6 my-3">
                <label className="font-semibold text-gray-600 text-md">All Brands</label>
                <BiChevronDown className="my-1"></BiChevronDown>
            </div>

        </div>
    );
};

export default Header;