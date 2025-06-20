"use client"

import { useEffect, useState, use as useReact } from "react"
import Card from "../components/Card"

const page = ({ params }) => {
    const unwrappedParams = useReact(params)
    const [itemdetails, setitemdetails] = useState([])
    const foodId = async (id) => {
        const getitem = (await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`))
        const resp = await getitem.json()
        setitemdetails(resp.meals)
    }
    useEffect(() => {
        foodId(unwrappedParams.id)
    }, [unwrappedParams])
    
  return (
    <div>
       {itemdetails.map((item , index)=>{
        return  <Card
        key={index}
        strMeal={item.strMeal}
        strMealThumb={item.strMealThumb}
        strInstructions={item.strInstructions}
        idMeal={item.idMeal}
       />
       })}
    </div>
  )
}

export default page