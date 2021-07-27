import { Request, Response } from "express";


class ListOrdersController {
    async handle(request: Request, response: Response) {
        return response.json("yay");
    }

}

export { ListOrdersController }