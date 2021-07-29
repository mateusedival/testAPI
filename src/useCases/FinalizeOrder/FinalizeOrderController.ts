import { Request, Response } from "express";
import { FinalizeOrderService } from "./FinalizeOrderService";


class FinalizeOrderController {
    async handle(request: Request, response: Response) {
        const { _id } = request.params;

        console.log(request.params)

        const finalizeOrderService = new FinalizeOrderService();

        await finalizeOrderService.execute({_id});

        return response.status(204);
    }
}

export { FinalizeOrderController }