import { OrderRepository } from "../../repositories/OrderRepository";
import { CreateOrderDTO } from "./CreateOrderdDTO";

class CreateOrderService {
    async execute({to, from}: CreateOrderDTO) {
        if(!to.city ||  !from.city) {
            throw new Error("Invalid city");
        }

        const orderRepository = new OrderRepository();
        
        const order = await orderRepository.create({to,from});

        return order;
    }
}

export {CreateOrderService};