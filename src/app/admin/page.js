"use client"

import Items from "../components/Items"
import { useMycontext } from "../store/ContextProvider"


const page = () => {
  const { admin } = useMycontext()
  console.log(admin)
  return (
    <div className="flex gap-2.5 h-screen flex-wrap bg-white p-5">
      {admin?.order?.map((item , indx)=>{
        return <Items key={indx} id={item._id} name={item.name} price={item.price} thumb={item.thumb} tableNumber={item.tableNumber} />
      })}

    </div>
  )
}

export default page