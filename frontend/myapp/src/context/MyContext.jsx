import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const Context =  createContext();
const MyContext = ({children}) => {
   const [apiData,setApiData] =  useState([]);
   axios.defaults.withCredentials=true;

   //api

   const loginUser =  async()=>{
    try{
      const url = 'http://localhost:6060/admin';
      const response =  await axios.get(url)
      console.log(response.data);
      setApiData(response.data)
      
    }catch (error){
       console.log('Error in fetching the data',error);
    }
   }

   useEffect(()=>{
     loginUser()
   },[])
  return (
    <div>
     <Context.Provider value={apiData}>
      {children}
      </Context.Provider> 
    </div>
  )
}

export default MyContext;

