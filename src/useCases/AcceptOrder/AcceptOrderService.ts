import { Status } from "../../@types/enums";
import { OrderRepository } from "../../repositories/OrderRepository";
import { AcceptOrderDTO } from "./AcceptOrderDTO";


class AcceptOrderService {
    async execute({_id}: AcceptOrderDTO) {
        console.log(_id);
        if(!_id) {
            throw new Error("Invalid order");
        }

        const orderRepository = new OrderRepository();

        const oldOrder = await orderRepository.findById(_id);

        if(oldOrder.status != Status.WAITING) {
            throw new Error("Order already taken or finished");
        }

        const order = await orderRepository.updateStatusAccepted(_id);

        return order;
    }
}

export { AcceptOrderService };