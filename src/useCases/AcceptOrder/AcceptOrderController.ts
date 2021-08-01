import { Request, Response } from "express";
import mongoose from "mongoose";
import { InvalidIdError } from "../../errors/User";
import { AcceptOrderService } from "./AcceptOrderService";


class AcceptOrderController {
    async handle(request: Request, response: Response) {
        const { _id } = request.params;
        const { user_id } = request;

        if(!mongoose.isValidObjectId(_id)) {
            throw new InvalidIdError();
        }

        const acceptOrderService = new AcceptOrderService();

        const order = await acceptOrderService.execute({_id, driverId: user_id});

        return response.json(order);
    }
}

export { AcceptOrderController }