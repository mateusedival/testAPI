import { Status } from "../@types/enums";
import { Order } from "../@types/Order";
import { OrderModel } from "../models/OrderModel";
import { BaseRepository } from "./base/BaseRepository";


class OrderRepository extends BaseRepository<Order>{
    constructor() {
        super(OrderModel)
    }

    async updateStatusAccepted(_id: string, driverId: string) {
        return OrderModel.findOneAndUpdate({_id},{status: Status.ACCEPTED, driverId},{new: true})
    }

    async updateStatusFinalized(_id: string, driverId: string) {
        return OrderModel.findOneAndUpdate({_id},{status: Status.FINALIZED, driverId},{new: true})
    }

    async findAllForDriver(driverId: string) {
        return OrderModel.find({$or: [
                {
                    status: Status.WAITING
                },
                {
                    $and: [
                        {
                            status: Status.ACCEPTED
                        },
                        {
                            driverId: driverId
                        }
                    ]
                }
        ]});
    }
}

export { OrderRepository };