import React, { useState } from "react";
import Card from "./Card";


const Content=(props)=>{
    const data=props.data;
    const page=props.page;
    const count=6*(page-1);
    const total=6*page;
    return (
        <div className="flex flex-wrap gap-x-8 gap-y-5 justify-center w-11/12 mx-auto my-4">
            {
                data.map((val,idx)=>{
                    if (idx<total && idx>=count){
                        return <Card data={val} key={idx}></Card>
                    }
                })
                
            }
        </div>
    );
};
export default Content;