import { OrderRepository } from "../../repositories/OrderRepository";
import { CreateOrderDTO } from "./CreateOrderdDTO";

class CreateOrderService {
    async execute({to, from}: CreateOrderDTO) {
        const orderRepository = new OrderRepository();
        
        const order = await orderRepository.create({to,from});

        return order;
    }
}

export {CreateOrderService};