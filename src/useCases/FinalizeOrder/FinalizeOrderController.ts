import { Request, Response } from "express";
import { FinalizeOrderService } from "./FinalizeOrderService";
import mongoose from "mongoose";
import { InvalidIdError } from "../../errors/User";

class FinalizeOrderController {
    async handle(request: Request, response: Response) {
        const { _id } = request.params;
        const { user_id } = request;

        if(!mongoose.isValidObjectId(_id)) {
            throw new InvalidIdError();
        }

        const finalizeOrderService = new FinalizeOrderService();

        const order = await finalizeOrderService.execute({_id, driverId: user_id});

        return response.json(order);
    }
}

export { FinalizeOrderController }