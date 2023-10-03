import React from "react";
import carData from "../data";
import Card from "./Card";

const SearchContent=(props)=>{
    const search=props.search;
    function find(key){
        for (let i=0;i<carData.length;i++){
          if (carData[i].Company.toLowerCase()===key.toLowerCase()
              || carData[i].model.toLowerCase()===key.toLowerCase()){
            return carData[i];
          }
      }
    }
    return(
        <div className="flex justify-center w-11/12 mx-auto my-11">
            <Card data={find(search)}></Card>
        </div>
    )
};

export default SearchContent;