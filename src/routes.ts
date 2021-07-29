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
import { FindOrderByIdController } from "./useCases/FindOrderById/FindOrderByIdController";
import { ListDriversContoller } from "./useCases/ListDrivers/ListDriversController";
import { ListOrdersController } from "./useCases/ListOrders/ListOrdersController";
import { ListOrdersDriversController } from "./useCases/ListOrdersDrivers/ListOrdersDriversController";

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
const findOrderByIdController = new FindOrderByIdController();
const listOrdersDriversController = new ListOrdersDriversController();


router.post("/drivers", ensureAutheticated, ensureAdmin, createDriverController.handle);
router.post("/drivers/login", authenticateDriverController.handle);
router.get("/drivers",ensureAutheticated,ensureAdmin,listDriversController.handle);

router.post("/managers", createManagerController.handle);
router.post("/managers/login", authenticateManagerController.handle);

router.post("/orders", ensureAutheticated, ensureAdmin, createOrderController.handle);
router.put('/orders/accept/:_id', ensureAutheticated, acceptOrderController.handle);
router.put('/orders/finalize/:_id', ensureAutheticated, finalizeOrderController.handle);
router.get("/orders/manager", ensureAutheticated, ensureAdmin, listOrdersController.handle);
router.get("/orders/driver", ensureAutheticated, listOrdersDriversController.handle)
router.get("/orders/:_id", ensureAutheticated, findOrderByIdController.handle);

export { router }