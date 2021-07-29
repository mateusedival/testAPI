import { Router } from "express";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAutheticated } from "./middlewares/ensureAutheticated";
import { AcceptOrderController } from "./useCases/AcceptOrder/AcceptOrderController";
import { AuthenticateDriverController } from "./useCases/AuthenticateDriver/AuthenticateDriverController";
import { AuthenticateManagerController } from "./useCases/AuthenticateManager/AuthenticateManagerController";
import { CreateDriverController } from "./useCases/CreateDriver/CreateDriverController";
import { CreateManagerController } from "./useCases/CreateManager/CreateManagerController";
import { CreateOrderController } from "./useCases/CreateOrder/CreateOrderController";
import { FinalizeOrderController } from "./useCases/FinalizeOrder/FinalizeOrderController";
import { ListDriversContoller } from "./useCases/ListDrivers/ListDriversController";
import { ListOrdersController } from "./useCases/ListOrders/ListOrdersController";

const router = Router();

const createDriverController = new CreateDriverController();
const createManagerController = new CreateManagerController();
const createOrderController = new CreateOrderController();
const authenticateDriverController = new AuthenticateDriverController();
const authenticateManagerController = new AuthenticateManagerController();
const listOrdersController = new ListOrdersController();
const listDriversController = new ListDriversContoller();
const acceptOrderController = new AcceptOrderController();
const finalizeOrderController = new FinalizeOrderController();


router.post("/drivers", ensureAutheticated, ensureAdmin, createDriverController.handle);
router.post("/managers", createManagerController.handle);
router.post("/orders", ensureAutheticated, ensureAdmin ,createOrderController.handle);
router.post("/drivers/login", authenticateDriverController.handle);
router.post("/managers/login", authenticateManagerController.handle);

router.put('/orders/accept/:_id',ensureAutheticated,acceptOrderController.handle);
router.put('/orders/finalize/:_id',ensureAutheticated,finalizeOrderController.handle);

router.get("/orders",ensureAutheticated,listOrdersController.handle);
router.get("/drivers",ensureAutheticated,ensureAdmin,listDriversController.handle)


export { router }