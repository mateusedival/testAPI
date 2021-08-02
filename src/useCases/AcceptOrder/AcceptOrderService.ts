import { Status } from "../../@types/enums";
import { OrderAlreadyTakenError, OrderNotFoundError } from "../../errors/Order";
import { OrderRepository } from "../../repositories/OrderRepository";
import { AcceptOrderDTO } from "./AcceptOrderDTO";


class AcceptOrderService {
    async execute({_id, driverId}: AcceptOrderDTO) {

        const orderRepository = new OrderRepository();

        const oldOrder = await orderRepository.findById(_id);

        if(!oldOrder) {
            throw new OrderNotFoundError();
        }

        if(oldOrder.status != Status.WAITING) {
            throw new OrderAlreadyTakenError();
        }

        const order = await orderRepository.updateStatusAccepted(_id, driverId);

        return {status: order.status};
    }
}

export { AcceptOrderService };