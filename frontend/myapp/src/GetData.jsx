import React,{useState,useEffect} from 'react';
import axios from 'axios';

function GetData() {
  let[data,setData] =  useState([])

  async function getdata(){
    let res = await axios.get('http://localhost:6060/empDetails')
    setData(res.data)
    console.log(res.data);
  }
  useEffect(()=>{
    getdata()
  },[])
  return (
    <div></div>
  )
}

export default GetData