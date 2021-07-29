import { Request, Response } from "express";
import { AcceptOrderService } from "./AcceptOrderService";


class AcceptOrderController {
    async handle(request: Request, response: Response) {
        const { _id } = request.params;

        console.log(request.params)

        const acceptOrderService = new AcceptOrderService();

        await acceptOrderService.execute({_id});

        return response.status(204);
    }
}

export { AcceptOrderController }