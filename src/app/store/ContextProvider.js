"use client"

import { createContext, useContext, useEffect, useState } from "react"

export const Mycontext = createContext()


const ContextProvider = ({children}) => {

const [cart,setCart] = useState([])
const [order,setOrder] = useState([])
const [allData,setAllData] = useState([])
const apidata = async()=>{
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    const data = await res.json()
    setAllData(data.meals)
}
useEffect(()=>{
  apidata()
},[])
    
  return (
    <Mycontext.Provider value={{allData}}>
         <div>{children}</div>
    </Mycontext.Provider>
   
  )
}
export const useMycontext = () => {
    return useContext(Mycontext)
}

export default ContextProvider