import { Request, Response } from "express";
import { InvalidAddressError } from "../../errors/Order";
import { CreateOrderService } from "./CreateOrderService";


class CreateOrderController {
    async handle(request: Request, response: Response) {
        const { to, from } = request.body;
    
        if(!to.city ||  !from.city) {
            throw new InvalidAddressError();
        }

        const createOrderService = new CreateOrderService();

        const order = await createOrderService.execute({to,from});
        
        return response.status(201).json(order);
    }
}

export { CreateOrderController }