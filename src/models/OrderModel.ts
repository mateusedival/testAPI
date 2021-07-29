import mongoose from "mongoose";
import { Status } from "../@types/enums"
//Estou usando order como tradução de Atendimento

const orderSchema = new mongoose.Schema({
    to: {
        city: {
            type: String,
            require: true,
        }, 
        state: String,
        street_name: String,
        street_number: String,
        latitude: Number,
        longitude: Number,
    },
    from: {
        city: {
            type: String,
            require: true,
        }, 
        state: String,
        street_name: String,
        street_number: String,
        latitude: Number,
        longitude: Number,
    },
    status: {
        type: String,
        enum: Status,
        default: Status.WAITING
    },
    driverId: mongoose.Types.ObjectId,
},
{
    timestamps: true
});

const OrderModel = mongoose.model("Order",orderSchema);

export { OrderModel }