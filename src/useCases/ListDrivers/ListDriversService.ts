import { DriverRepository } from "../../repositories/DriverRepository";


class ListDriversService {
    async execute() {
        const driverRepository = new DriverRepository();

        const drivers = await driverRepository.findAll();

        return drivers;

    }
}

export { ListDriversService }