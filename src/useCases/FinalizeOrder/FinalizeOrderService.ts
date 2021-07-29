import { Status } from "../../@types/enums";
import { OrderRepository } from "../../repositories/OrderRepository";
import { FinalizeOrderDTO } from "./FinalizeOrderDTO";


class FinalizeOrderService {
    async execute({_id}: FinalizeOrderDTO) {
        console.log(_id);
        if(!_id) {
            throw new Error("Invalid order");
        }

        const orderRepository = new OrderRepository();

        const oldOrder = await orderRepository.findById(_id);

        if(oldOrder.status != Status.ACCEPTED) {
            throw new Error("Order not accepted or already finished");
        }

        const order = await orderRepository.updateStatusFinalized(_id);

        return order;
    }
}

export { FinalizeOrderService }