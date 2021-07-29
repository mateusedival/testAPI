import { Request, Response } from "express";
import { ListDriversService } from "./ListDriversService";

class ListDriversContoller {
    async handle(request: Request, response: Response) {
        const listDriverService = new ListDriversService();

        const drivers = await listDriverService.execute();

        return response.json(drivers);
    }
}

export { ListDriversContoller }