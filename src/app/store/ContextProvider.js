"use client"

import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"

export const Mycontext = createContext()


const ContextProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const [order, setOrder] = useState([])
  const [admin , setadmin] = useState([])
  const [allData, setAllData] = useState([])


  const apidata = async () => {
    const { data } = await axios.get("http://localhost:3000/api/")
    setAllData(data.meals)
  }

  const sendorderreq = async (value) => {
    const a = await axios.post("http://localhost:3000/api/order", { value })
    admindata ()
  }

  const admindata = async () => {
    const {data} = await axios.get("http://localhost:3000/api/admindashboard")
    setadmin(data)
    console.log(data)
  }

  useEffect(() => {
    apidata()
    admindata()
  }, [])

  return (
    <Mycontext.Provider value={{ allData, sendorderreq , admin }}>
      {children}
    </Mycontext.Provider>

  )
}
export const useMycontext = () => {
  const context = useContext(Mycontext);
  if(!context) return "Context must be initialized."
  return context;
}

export default ContextProvider