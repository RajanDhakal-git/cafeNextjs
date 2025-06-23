"use client"

import Items from "../components/Items"
import { useMycontext } from "../store/ContextProvider"
import { useEffect } from 'react';
import io from 'socket.io-client';

let socket;

const page = () => {
  const { admin } = useMycontext()
  console.log(admin)

  useEffect(() => {
    socket = io(); // Connects to the same origin
    socket.on('newOrder', (data) => {
      // Fetch latest orders or update state here
      window.location.reload(); // Simple way to refresh for demo
    });
    return () => {
      if (socket) socket.disconnect();
    };
  }, []);

  return (
    <div className="flex gap-2.5 h-screen flex-wrap bg-white p-5">
      {admin?.order?.map((item , indx)=>{
        return <Items key={indx} id={item._id} name={item.name} price={item.price} thumb={item.thumb} tableNumber={item.tableNumber} />
      })}

    </div>
  )
}

export default page