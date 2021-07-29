import { Request, Response } from "express";
import { FinalizeOrderService } from "./FinalizeOrderService";


class FinalizeOrderController {
    async handle(request: Request, response: Response) {
        const { _id } = request.params;
        const { user_id } = request;

        if(!_id) {
            throw new Error("Invalid order");
        }

        const finalizeOrderService = new FinalizeOrderService();

        const order = await finalizeOrderService.execute({_id, driverId: user_id});

        return response.json(order);
    }
}

export { FinalizeOrderController }