import { Router } from "express";
import { CreateDriverController } from "./useCases/CreateDriver/CreateDriverController";

const router = Router();

const createDriverController = new CreateDriverController();

router.post("/drivers", createDriverController.handle);



export { router }