import Order from "@/schema/Order"
import { NextResponse } from "next/server"

 export const GET = async () => {
    try {
        const order = await Order.find({})
        console.log(order)
        return NextResponse.json({order})
    } catch (error) {
        return NextResponse.json({msg:error})
    }
}