"use client"

import Items from "../components/Items"
import { useMycontext } from "../store/ContextProvider"

const Admin = () => {
  const a = useMycontext()
  console.log(a?.admin)
  return (
    <div>
      {a?.admin?.order?.map((item, indx) => {
        return <Items key={indx} {...item} />
      })}
    </div>
  )
}

export default Admin 