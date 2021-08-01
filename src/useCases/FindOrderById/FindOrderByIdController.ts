import { Request, Response } from "express";
import { FindOrderByIdService } from "./FindOrderByIdService";
import mongoose from "mongoose";
import { InvalidIdError } from "../../errors/User";

class FindOrderByIdController {
    async handle(request: Request, response: Response) {
        const { _id } = request.params;

        if(!mongoose.isValidObjectId(_id)) {
            throw new InvalidIdError();
        }

        const findOrderByIdSevice = new FindOrderByIdService();

        const order = await findOrderByIdSevice.execute({_id});

        return response.json(order);
    }
}

export { FindOrderByIdController }