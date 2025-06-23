import { NextResponse } from "next/server";
import dbConnect from "@/utils/db";
import Order from "@/schema/Order";

export async function POST(req) {
  try {
    const body = await req.json();
    const {value}= body;
    console.log(value)

    if (!value) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    await dbConnect();
    const order = await Order.create({
      name: value?.strMeal,
      price :value?.displayPrice,
      thumb :value?.strMealThumb,
      itemId: value?.idMeal, 
      tableNumber: value?.tbnumb,
    });
    console.log(order)
    if (global._io) {
      global._io.emit('newOrder', { message: 'A new order was placed!' });
    }
    return NextResponse.json({ success: true, value });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 