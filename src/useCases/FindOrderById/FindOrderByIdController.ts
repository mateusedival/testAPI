import { Request, Response } from "express";
import { FindOrderByIdService } from "./FindOrderByIdService";


class FindOrderByIdController {
    async handle(request: Request, response: Response) {
        const { _id } = request.params;

        const findOrderByIdSevice = new FindOrderByIdService();

        const order = await findOrderByIdSevice.execute({_id});

        return response.json(order);
    }
}

export { FindOrderByIdController }