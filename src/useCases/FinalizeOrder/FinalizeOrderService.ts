import { Status } from "../../@types/enums";
import { OrderFromAnotherDriverError, OrderNotAcceptedError, OrderNotFoundError } from "../../errors/Order";
import { OrderRepository } from "../../repositories/OrderRepository";
import { FinalizeOrderDTO } from "./FinalizeOrderDTO";


class FinalizeOrderService {
    async execute({_id, driverId}: FinalizeOrderDTO) {

        const orderRepository = new OrderRepository();

        const oldOrder = await orderRepository.findById(_id);

        if(!oldOrder) {
            throw new OrderNotFoundError();
        }

        if((oldOrder.driverId as string) != driverId) {
            throw new OrderFromAnotherDriverError();
        }

        if(oldOrder.status != Status.ACCEPTED) {
            throw new OrderNotAcceptedError();
        }

        const order = await orderRepository.updateStatusFinalized(_id, driverId);

        return {status: order.status};
    }
}

export { FinalizeOrderService }