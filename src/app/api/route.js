import axios from "axios"
import { NextResponse } from "next/server"


export const GET = async (req) => {
   try {
    const {data} = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")

    return NextResponse.json(data)
    
   } catch (error) {
    return NextResponse.json({msg:"Faild to get data"})
   }
}

