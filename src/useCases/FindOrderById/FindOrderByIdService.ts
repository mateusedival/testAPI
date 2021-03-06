import { OrderNotFoundError } from "../../errors/Order";
import { OrderRepository } from "../../repositories/OrderRepository";
import { FindOrderByIdDTO } from "./FindOrderByIdDTO";


class FindOrderByIdService {
    async execute({_id}: FindOrderByIdDTO) {
        const orderRepository = new OrderRepository();

        const order = await orderRepository.findById(_id);
        
        if(!order) {
            throw new OrderNotFoundError();
        }

        return order;

    }
}

export { FindOrderByIdService }