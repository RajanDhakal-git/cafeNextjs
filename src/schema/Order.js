import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    
  },
  thumb: {
    type: String,
   
  },
  itemId: {
    type: String,
    required: true,
  },
  tableNumber: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

export default mongoose.models.Order || mongoose.model("Order", OrderSchema); 