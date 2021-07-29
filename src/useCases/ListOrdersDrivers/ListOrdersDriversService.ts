import { OrderRepository } from "../../repositories/OrderRepository"
import { ListOrdersDriversDTO } from "./ListOrdersDriversDTO";

class ListOrdersDriversService {
    async execute({driverId}: ListOrdersDriversDTO) {
        const orderRepository = new OrderRepository();
        
        const orders = await orderRepository.findAllForDriver(driverId);

        return orders;
    }
}

export { ListOrdersDriversService }