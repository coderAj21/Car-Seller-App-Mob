import './App.css';
import Header from "./components/Header";
import carData from './data';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState } from 'react';
import SearchContent from './components/SearchContent';

function App() {
  const[page,setPage]=useState(1);
  const [search,setSearch]=useState("");
  function find(key){
    if (key.length<2){
      return false;
    }
      for (let i=0;i<carData.length;i++){
        if (carData[i].Company.toLowerCase()===key.toLowerCase()
        || carData[i].model.toLowerCase()===key.toLowerCase()){
            return true;
        }
    }
    return false;
  }
  return (
    <div className="bg-blue-100 w-screen h-fit py-2">
      <Header setSearch={setSearch}></Header>
      {
        find(search) && search.length>0?
        (
          <div>
            <SearchContent search={search} ></SearchContent>
            <div className='flex justify-between w-11/12 h-[63px] bg-blue-100'></div>
          </div>
        )
        :
        (
          <div>
            <Content data={carData} page={page}></Content>
            <Footer page={page} setCount={setPage}></Footer>
          </div>
          
        )
      }
    </div>
  )
}

export default App;
