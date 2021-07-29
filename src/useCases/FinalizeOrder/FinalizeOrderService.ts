import { Status } from "../../@types/enums";
import { OrderRepository } from "../../repositories/OrderRepository";
import { FinalizeOrderDTO } from "./FinalizeOrderDTO";


class FinalizeOrderService {
    async execute({_id, driverId}: FinalizeOrderDTO) {

        const orderRepository = new OrderRepository();

        const oldOrder = await orderRepository.findById(_id);

        if((oldOrder.driverId as string) != driverId) {
            throw new Error("Cannot finalize order from another driver")
        }

        if(oldOrder.status != Status.ACCEPTED) {
            throw new Error("Order not accepted or already finished");
        }

        const order = await orderRepository.updateStatusFinalized(_id, driverId);

        return order;
    }
}

export { FinalizeOrderService }