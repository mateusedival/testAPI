import { Status } from "../../@types/enums";
import { OrderRepository } from "../../repositories/OrderRepository";
import { AcceptOrderDTO } from "./AcceptOrderDTO";


class AcceptOrderService {
    async execute({_id, driverId}: AcceptOrderDTO) {

        const orderRepository = new OrderRepository();

        const oldOrder = await orderRepository.findById(_id);

        if(oldOrder.status != Status.WAITING) {
            throw new Error("Order already taken or finished");
        }

        const order = await orderRepository.updateStatusAccepted(_id, driverId);

        return order;
    }
}

export { AcceptOrderService };