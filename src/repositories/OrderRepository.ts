import { Status } from "../@types/enums";
import { Order } from "../@types/Order";
import { OrderModel } from "../models/OrderModel";
import { BaseRepository } from "./base/BaseRepository";


class OrderRepository extends BaseRepository<Order>{
    constructor() {
        super(OrderModel)
    }

    async updateStatusAccepted(_id: string) {
        return OrderModel.updateOne({_id: _id},{status: Status.ACCEPTED})
    }

    async updateStatusFinalized(_id: string) {
        return OrderModel.updateOne({_id: _id},{status: Status.FINALIZED})
    }
}

export { OrderRepository };