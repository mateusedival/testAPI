import { Request, Response } from "express";
import { ListOrdersDriversService } from "./ListOrdersDriversService";


class ListOrdersDriversController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;
       
        const listOrdersDriversService = new ListOrdersDriversService();
       
        const orders = await listOrdersDriversService.execute({driverId: user_id});

        return response.json(orders);
    }

}

export { ListOrdersDriversController }