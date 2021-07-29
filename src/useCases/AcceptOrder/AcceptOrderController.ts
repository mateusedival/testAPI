import { Request, Response } from "express";
import mongoose from "mongoose";
import { AcceptOrderService } from "./AcceptOrderService";


class AcceptOrderController {
    async handle(request: Request, response: Response) {
        const { _id } = request.params;
        const { user_id } = request;

        if(!mongoose.isValidObjectId(_id)) {
            throw new Error("Invalid order");
        }

        const acceptOrderService = new AcceptOrderService();

        const order = await acceptOrderService.execute({_id, driverId: user_id});

        return response.json(order);
    }
}

export { AcceptOrderController }